import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from './components/splash';
import NavBar from './components/navbar';
import Form from './components/login';
import {HashRouter, Route} from 'react-router-dom';
import Index from './components/index';
import Widgets from './components/widgets';
import Clock from './components/clock';
import Clicker from './components/clicker';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route path='/'
            render={(routeProps) => (
              <NavBar {...routeProps} {...{labels: {"Home": "/", "About": "/about", "Contact": "/contact", "NITRO CHAT!": "/nitro"}}} />
            )}
          />
          <Route exact path="/" component={Splash} />
          <Route exact path='/form'
             render={(routeProps) => (
               <Form {...routeProps} {...{fields:
                {
                  "Username": ["text", "username"],
                  "Email Address": ["email", "email"],
                  "Password": ["password", "password"]
                }, button: "Login"
              }} />
             )}
          />
          <Route exact path='/portrait'
             render={(routeProps) => (
            <Index {...routeProps} {...{orientation: "portrait",
               items: {
                "Bob": {"id": 1, "Attack": "255", "Defense": "255", "HP": "9999", "MP": "999", "Charisma": "-2"},
                "Alice": {"id": 2, "Attack": "99", "Defense": "99", "HP": "1280", "MP": "450", "Charisma": "145"},
                "Carol": {"id": 3, "Attack": "1", "Defense": "1", "HP": "1", "MP": "1", "Charisma": "9999"},
                "Dan": {"id": 5, "Attack": "25", "Defense": "30", "HP": "548", "MP": "26", "Charisma": "20"}
              }
              }}
            />
            )}
          />
          <Route exact path='/landscape'
             render={(routeProps) => (
            <Index {...routeProps} {...{orientation: "landscape",
               items: {
                "Bob": {"id": 1, "Attack": "255", "Defense": "255", "HP": "9999", "MP": "999", "Charisma": "-2"},
                "Alice": {"id": 2, "Attack": "99", "Defense": "99", "HP": "1280", "MP": "450", "Charisma": "145"},
                "Carol": {"id": 3, "Attack": "1", "Defense": "1", "HP": "1", "MP": "1", "Charisma": "9999"},
                "Dan": {"id": 5, "Attack": "25", "Defense": "30", "HP": "548", "MP": "26", "Charisma": "20"}
              }
              }}
            />
            )}
          />
           <Route exact path='/widgets'
             render={(routeProps) => (
            <Widgets {...routeProps} {...{widgets: [<Clock />, <Clicker />]}} />
            )}
          />
        </div>
      </HashRouter>
    );
  }
}

export default App;