import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      linkArray: []
    }
  }

  componentDidMount(){
    this.buildLinkArray();
  }

  buildLinkArray(){
    let newLinks = [];
    let link;
    Object.keys(this.props.labels).forEach(label => {
      link = this.props.labels[label];
      newLinks.push(<Link className="nav-link" to={link}> {label}</Link>);
    });
    this.setState({linkArray: newLinks});
  }

  render(){
    return(
      <div className="nav-bar-container">
        {this.state.linkArray}
      </div>
    )
  }
}

export default NavBar;