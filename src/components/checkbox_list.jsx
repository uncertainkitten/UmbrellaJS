import React from 'react';

class CheckboxList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      checked: {},
      checkedBoxes: []
    }
  }

  buildChecklist(){
    let checkedBoxes = [];
  }

  render(){
    return(
      <div className="checkbox-list-container">
        {this.state.checkedBoxes}
      </div>
    );
  }
}

export default Checkbox;

//Basically, you want to make an object of checked items from array of checkable items
//Default them to unchecked
//Create a method to handle checking those boxes
//Create an object with Checkboxes and ids (robust to deletion/addition/editing)
//Spew out the Checkbox components onto the render function
//invocation of handleCheckbox on click swaps the image and the state
//Pass down to checkbox - Label, Checked, handleCheckbox