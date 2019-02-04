import React from 'react';
import {Link} from 'react-router-dom';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formFields: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.buildFormArray();
  }

  buildFormArray(){
    // this.props.fields should be an object with the format {Label: [input type, value]}
    // create a variable in the forEach with type and value for easier reference
    // When this.state.formFields is iterated over in the render function, the output will ideally be in the order of the keys
    // However, as objects do not make guarantees about order, it might be necessary to add a "legend" prop to keep things straight
    // Which is essentially the keys of the this.props.fields object
    let newFields = [];
    let inputType;
    let inputValue;
    Object.keys(this.props.fields).forEach( label => {
      inputType = this.props.fields[label][0]
      inputValue = this.props.fields[label][1]
      newFields.push(<label className="form-label">{label}</label>)
      newFields.push(<input className="form-input" type={inputType} onChange={this.update(inputValue)} value={this.state[inputValue]} />)
    });
    this.setState({formFields: newFields})
  }

  update(field){
    return (e => {
      this.setState({[field]: e.target.value})
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let formSubmit = {};
    let inputValue;
    Object.keys(this.props.fields).forEach( label => {
      inputValue = this.props.fields[label][1];
      formSubmit[inputValue] = this.state[inputValue]
    });
    console.log(formSubmit);
    //Note - that console.log should actually be an API calls that sends the information to the server
  }

  render(){
    return(
      <div className="form-container">
        <h3 className="form-header">Login</h3>
        <form className="form-form" onSubmit={this.handleSubmit}>
          {this.state.formFields}
          <Link className="form-link" to="/">Back</Link>
          <input className="form-btn" type="submit" value={this.props.button} />
        </form>
      </div>
    );
  }
}

export default Form;