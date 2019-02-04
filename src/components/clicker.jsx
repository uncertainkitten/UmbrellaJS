import React from 'react';
import ProgressBar from './progress';

class Clicker extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      clicks: 0
    }
    this.incrementClick = this.incrementClick.bind(this);
  }

  incrementClick(e){
    e.preventDefault();
    this.setState({clicks: this.state.clicks + 1});
  }

  render(){
    return(
    <div className="clicker-container">
      <button className="clicker-btn" onClick={this.incrementClick}>CLICK!</button>
      <ProgressBar progress={this.state.clicks % 100} />
      <p className="clicker-counter">Total Clicks: {this.state.clicks}</p>
    </div>
    );
  }
}

export default Clicker;