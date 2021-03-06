import React from 'react';
import {Link} from 'react-router-dom';
import Dropdown from './dropdown';
import CheckboxList from './checkbox_list';

class Splash extends React.Component{
  render(){
    return(
      <div className="splash-container">
        <div className="splash-box">
          <h3 className="splash-head">React Templates</h3>
          <p className="splash-text">This might become its own component</p>
          <p className="splash-text">But for now, have a bunch of not-links to templates!</p>
          <ul className="template-list">
            <li className="template-list-item"><Link className="splash-link" to="/form">Generic Form</Link></li>
            <li className="template-list-item"><Link className="splash-link" to="/portrait">Index (portrait)</Link></li>
            <li className="template-list-item"><Link className="splash-link" to="/landscape">Index (landscape)</Link></li>
            <li className="template-list-item"><Link className="splash-link" to="/widgets">Widgets</Link></li>
          </ul>
          <Dropdown options={["Apples", "Bananas", "Space", "Time", "Canteloupes"]} label="Stuff" />
          <CheckboxList checkboxes={["Check Me!", "Or me!", "Especially Me!", "No checkies >=["]} />
        </div>
      </div>
    );
  }
}

export default Splash;