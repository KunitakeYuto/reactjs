import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';//react-reduxの機能
import "./index.css";
import App from './App';
import MemoStore from "./memo/Store";

//import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <Provider store={MemoStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

