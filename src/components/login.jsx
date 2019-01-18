import React from 'react';

class LoginForm extends React.Component{
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
    let newFields = [];
    this.props.fields.forEach( field => {
      newFields.push(<label className="login-label">{field[0].toUpperCase() + field.substring(1)}</label>)
      newFields.push(<input className="login-input" type="text" onChange={this.update({field})} value={this.state[field]} />)
    });
    newFields.push(<label className="login-label">Password</label>);
    newFields.push(<input className="login-input" type="password" onChange={this.update("password")} value={this.state.password} />)
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
    this.props.fields.forEach( field => {
      formSubmit[field] = this.state[field]
    });
    console.log(formSubmit);
  }

  render(){
    return(
      <div className="login-container">
        <h3 className="login-header">Login</h3>
        <form className="login-form" onSubmit={this.handleSubmit}>
          {this.state.formFields}
          <input className="login-btn" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default LoginForm;