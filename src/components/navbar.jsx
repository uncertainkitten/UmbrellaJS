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
    this.buildArray();
  }

  buildArray(){
    let newLinks = [];
    this.props.labels.forEach(link => {
      newLinks.push(<Link className="nav-link" to={`/${link.toLowerCase()}`}> {link}</Link>);
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