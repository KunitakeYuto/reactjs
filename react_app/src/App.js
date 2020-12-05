import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import Rect from "./Rect"
//import { Component } from 'react';

class App extends Component {
  render() {
    return <div>
      <h1>React</h1>
      <Rect x="50" y="50" w="150" h="150" c="cyan" r="50" />
      <Rect x="150" y="100" w="150" h="150" c="magenta" r="50" />
      <Rect x="100" y="150" w="150" h="150" c="black" r="50" />
    </div >;
  }
}


export default App;
