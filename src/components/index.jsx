import React from 'react';
import IndexItem from './index_item';

class Index extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      indexItems: []
    }
  }

  componentDidMount(){
    this.buildIndex();
  }

  buildIndex(){
    let indexItems = [];
    let contents;
    Object.keys(this.props.items).forEach( item => {
      contents = this.props.items[item];
      indexItems.push(<IndexItem key={contents.id} contents={contents} label={item} orientation={this.props.orientation}/>);
    })
    this.setState({indexItems: indexItems})
  }

  render(){
    let orientation;
    if (this.props.orientation === "landscape"){
      orientation = "index-item-landscape";
    } else {
      orientation = "index-item-portrait";
    }
    return(
      <div className={orientation}>
        <ul className={`index-list-${this.props.orientation}`}>{this.state.indexItems}</ul>
      </div>
    );
  }
}

export default Index;