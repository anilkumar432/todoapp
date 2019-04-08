import React, { Component } from 'react';
import './App.css';
import profilePic from './assets/logo.svg';
import circleTick from './assets/circle-tick.svg';
import forwardArrow from './assets/forward.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={profilePic} className="profilePic"/>
          <p className="welcome">Welcome </p>
          <div className="message">
            <img src={circleTick} className="circleTick"/>
            <p>You have Successfully Created ToDo Account </p>
          </div>
          <button className="button"><img src={forwardArrow} className="arrow"/></button>

      </div>
    );
  }
}



export default App;
