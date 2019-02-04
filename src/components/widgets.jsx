import React from 'react';

class Widgets extends React.Component{
  render(){
    return(
      <div className="widget-container">
        {this.props.widgets}
      </div>
    );
  }
}

export default Widgets;