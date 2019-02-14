import React from 'react';

class ProgressBar extends React.Component{
  render(){
    return(
      <div className="progress-bar">
        <div style={{backgroundColor: "#FF331F", width: `${this.props.progress}%`, height: '100%', borderRadius: '10px 0px 0px 10px'}}></div>
      </div>
    );
  }
}

export default ProgressBar;