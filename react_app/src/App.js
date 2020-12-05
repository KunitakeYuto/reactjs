import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import Rect from "./Rect"
//import { Component } from 'react';

class App extends Component {
  msgStyle = {
    fontSize: "24pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
  }

  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello Component",
    };
  }

  render() {
    return <div>
      <h1>React</h1>
      <p style={this.msgStyle}>{this.state.msg}</p>
      <p style={this.msgStyle}>{this.props.msg}</p>
    </div>;
  }
}


export default App;
