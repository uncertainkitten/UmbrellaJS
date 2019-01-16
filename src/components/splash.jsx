import React from 'react';

class Splash extends React.Component{
  render(){
    return(
      <div className="splash-container">
        <div className="splash-box">
          <h3 className="splash-head">React Templates</h3>
          <p className="splash-text">This might become its own component</p>
          <p className="splash-text">But for now, have a bunch of not-links to templates!</p>
          <ul className="template-list">
            <li className="template-list-item">Login Form</li>
            <li className="template-list-item">Basic Text Form</li>
            <li className="template-list-item">Upload Form</li>
            <li className="template-list-item">Download Page</li>
            <li className="template-list-item">Index (portrait)</li>
            <li className="template-list-item">Index (landscape)</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Splash;