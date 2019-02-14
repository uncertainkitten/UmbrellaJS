import React from 'react';
import Checkbox from './checkbox';

class CheckboxList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      checked: {},
      checkedBoxes: {}
    }
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidMount(){
    this.buildChecklist();
  }

  buildChecklist(){
    let checkedBoxes = {};
    let checked = {};
    this.props.checkboxes.forEach(checkbox => {
      checked[checkbox] = false;
      checkedBoxes[checkbox] = <Checkbox label={checkbox} checked={this.state.checked[checkbox]} handleCheck={this.handleCheck} />
    });
    this.setState({checkedBoxes, checked});
  }

  handleCheck(label){
    let newChecked = Object.assign({}, this.state.checked);
    let newCheckedBoxes = Object.assign({}, this.state.checkedBoxes);
    newChecked[label] = !newChecked[label];
    newCheckedBoxes[label] = <Checkbox label={label} checked={this.state.checked[label]} handleCheck={this.handleCheck} />;
    this.setState({checked: newChecked, checkedBoxes: newCheckedBoxes});
  }

  render(){
    return(
      <div className="checkbox-list-container">
        {Object.values(this.state.checkedBoxes)}
      </div>
    );
  }
}

export default CheckboxList;

//Basically, you want to make an object of checked items from array of checkable items
//Default them to unchecked
//Create a method to handle checking those boxes
//Create an object with Checkboxes and ids (robust to deletion/addition/editing)
//Spew out the Checkbox components onto the render function
//invocation of handleCheckbox on click swaps the image and the state
//Pass down to checkbox - Label, Checked, handleCheckbox