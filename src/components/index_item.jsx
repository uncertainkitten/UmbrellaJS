import React from 'react';

class IndexItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      indexItemContents: []
    }
  }

  componentDidMount(){
    this.buildIndexItemArray();
  }

  buildIndexItemArray(){
    let indexItemContents = [];
    let item;
    Object.keys(this.props.contents).forEach(label => {
      item = this.props.contents[label];
      if (label !== "id"){
        indexItemContents.push(<li className = "index-item-listing">{label} : {item}</li>)
      }
    });
    this.setState({indexItemContents: indexItemContents});
  }

  render(){
    return(
      <div className="index-item-container">
        <p className="index-item-label">{this.props.label}</p>
        {this.state.indexItemContents}
      </div>
    );
  }
}

export default IndexItem;