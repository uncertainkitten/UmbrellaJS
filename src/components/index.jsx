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
      indexItems.push(<IndexItem key={contents.id} contents={contents} label={item} />);
    })
    this.setState({indexItems: indexItems})
  }

  render(){
    return(
      <div className={this.props.orientation}>
        {this.state.indexItems}
      </div>
    );
  }
}

export default Index;