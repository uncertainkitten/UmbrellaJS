import React from 'react';
import {Link} from 'react-router-dom';
import Dropdown from './dropdown';

class Splash extends React.Component{
  render(){
    return(
      <div className="splash-container">
        <div className="splash-box">
          <h3 className="splash-head">React Templates</h3>
          <p className="splash-text">This might become its own component</p>
          <p className="splash-text">But for now, have a bunch of not-links to templates!</p>
          <ul className="template-list">
            <li className="template-list-item"><Link className="splash-link" to="/login">Login Form</Link></li>
            <li className="template-list-item">Basic Text Form</li>
            <li className="template-list-item">Upload Form</li>
            <li className="template-list-item">Download Page</li>
            <li className="template-list-item">Index (portrait)</li>
            <li className="template-list-item">Index (landscape)</li>
          </ul>
          <Dropdown options={["Apples", "Bananas", "Space", "Time", "Canteloupes"]} label="Stuff" />
        </div>
      </div>
    );
  }
}

export default Splash;