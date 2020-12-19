import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from "redux";
import { Provider } from 'react-redux';//react-reduxの機能

import './index.css';
import App from './App';

//import reportWebVitals from './reportWebVitals';

let state_value = {
  counter: 0,
  message: "COUNTER"
}

function counter(state = state_value, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
        message: "INCREMENT"
      };
      defaut:
      return state;
  }
}

let store = createStore(counter);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >,
  document.getElementById("root")
);
