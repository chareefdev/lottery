import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Main from './components/Main';
import io from 'socket.io-client';

// const socket = io('http://localhost:3001');

class App extends Component {
  render() {
    return (
      <Main style={{background:'#e8e8ea'}}/>
    );
  }
}

export default App;
