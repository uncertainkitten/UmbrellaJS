import React from 'react';

class Checkbox extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let checker = '../../public/Checkbox-unchecked.png';
    let checkerAlt = "Unchecked";
    if (this.props.checked === true){
      checker = '../../public/Checkbox-checked.png';
      checkerAlt = "Checked";
    }
    return(
      <div className="checkbox-container">
        <img className="checker" onClick={this.props.handleCheck} src={checker} alt={checkerAlt}/>
      </div>
    )
  }
}

export default Checkbox;