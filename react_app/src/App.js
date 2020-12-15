import React, { Component } from "react";
import './App.css';
//import { Component } from 'react';

class App extends Component {
  input = "";


  msgStyle = {
    fontSize: "20pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px"
  }

  constructor(props) {
    super(props);
    this.state = {
      message: "type your name",
    }
    this.doCheck = this.doChange.bind(this);
  }

  doChange(event) {
    alert(event.target.value + "は長すぎます(10文字まで)");
  }

  doSubmit(event) {
    this.setState({
      message: "Hello" + this.input + "!"
    });
    event.preventDefault();
  }

  render() {
    return <div>
      <h1>React</h1>
      <h2>{this.state.message}</h2>
      <Message maxlength="10" onCheck={this.doCheck}></Message>
    </div>;
  }
}

class Message extends Component {
  inputStyle = {
    fontSize: "12pt",
    padding: "5px",
  }

  constructor(props) {
    super(props);
    this.doChange = this.doChange.bind(this);
  }

  doChange(e) {
    if (e.target.value.length > this.props.maxlength) {
      this.props.onCheck(e);
      e.target.valve = e.target.value.substr(0, this.props.maxlength);
    }
  }

  render() {
    return <input type="text" style={this.inputStyle} onChange={this.doChange} />

  }
}

export default App;
