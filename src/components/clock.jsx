import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: new Date()
    }
    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    let clockInter = setInterval(() => this.tick(), 1000);
    this.setState({clockInter: clockInter})
  }

  componentWillUnmount(){
    clearInterval(this.state.clockInter);
  }

  tick(){
    this.setState({time: new Date()})
  }


  render(){
    return(
      <div className="clock-container">
        <div className="clock">{this.state.time.toLocaleTimeString({timeZoneName: "short"})}</div>
      </div>
    );
  }
}

export default Clock;