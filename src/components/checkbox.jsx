import React from 'react';
import checked from '../Checkbox-checked.png';
import unchecked from '../Checkbox-unchecked.png';

class Checkbox extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let checker = unchecked;
    let checkerAlt = "Unchecked";
    if (this.props.checked === true){
      checker = checked;
      checkerAlt = "Checked";
    }
    return(
      <div className="checkbox-container" onClick={(label) => this.props.handleCheck(this.props.label)}>
        <img className="checker" src={checker} alt={checkerAlt}/>
        <label className="checker-label">{this.props.label}</label>
      </div>
    )
  }
}

export default Checkbox;