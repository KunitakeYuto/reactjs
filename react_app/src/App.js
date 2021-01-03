import React, { Component } from 'react';
import "./App.css";
import Sampledata from "./fire/SampleData";
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAvTQeelJrzkKAv375BIA-MSo_lHDAR0QQ",
  authDomain: "react-gakusyu.firebaseapp.com",
  databaseURL: "https://react-gakusyu-default-rtdb.firebaseio.com",
  projectId: "react-gakusyu",
  storageBucket: "react-gakusyu.appspot.com",
  messagingSenderId: "22479159306",
  appId: "1:22479159306:web:88b323adafb2511f4a1ff3",
  measurementId: "G-0EHV7VTWH6"
};

firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <Sampledata />
      </div>
    )
  }
}

export default App;