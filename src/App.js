import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from './components/splash';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Splash />
      </div>
    );
  }
}

export default App;
