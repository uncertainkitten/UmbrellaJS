import React from 'react';

class Dropdown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: "None",
      options: [],
      visible: false
    }
    this.selectOption = this.selectOption.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount(){
    this.buildOptionsFromProps();
  }

  toggleDropdown(){
    this.setState({visible: !this.state.visible});
  }

  selectOption(e){
    this.setState({selected: e.target.title, visible: false});
  }

  buildOptionsFromProps(){
    let optionsList = [];
    this.props.options.forEach(option => {
      optionsList.push(<li className="dropdown-option" onClick={this.selectOption} title={option}>{option}</li>);
    });
    this.setState({options: optionsList});
  }

  render(){
    let dropdownClass = "dropdown-hide";
    if (this.state.visible){
      dropdownClass = "dropdown-show";
    }

    return(
      <div className="dropdown-container">
        <label className="dropdown-label">{this.props.label}</label>
        <ul className="dropdown-list">
          <li className="dropdown-selected" onClick={this.toggleDropdown}>Selected: {this.state.selected}</li>
          <div className={dropdownClass}>
            {this.state.options}
          </div>
        </ul>
      </div>
    )
  }
}

export default Dropdown;