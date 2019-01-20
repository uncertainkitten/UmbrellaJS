import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from './components/splash';
import NavBar from './components/navbar';
import Login from './components/login';
import {HashRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route path='/'
            render={(routeProps) => (
              <NavBar {...routeProps} {...{labels: ["Home", "About", "FAQ", "NITRO CHAT"]}} />
            )}
          />
          <Route exact path="/" component={Splash} />
          <Route exact path='/login'
             render={(routeProps) => (
               <Login {...routeProps} {...{fields: ["email", "username", "ssn"]}} />
             )}
          />
        </div>
      </HashRouter>
    );
  }
}

export default App;
