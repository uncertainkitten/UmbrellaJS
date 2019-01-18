import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from './components/splash';
import NavBar from './components/navbar';
import {HashRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavBar labels={["Home", "About", "FAQ", "NITRO CHAT"]} />
          <Splash />
        </div>
      </HashRouter>
    );
  }
}

export default App;
