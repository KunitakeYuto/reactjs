import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import firebase from "firebase";

var config = {
    apiKey: "AIzaSyAvTQeelJrzkKAv375BIA-MSo_lHDAR0QQ",
    authDomain: "react-gakusyu.firebaseapp.com",
    databaseURL: "https://react-gakusyu-default-rtdb.firebaseio.com",
    projectId: "react-gakusyu",
    storageBucket: "react-gakusyu.appspot.com",
    messagingSenderId: "22479159306",
    appId: "1:22479159306:web:fdb791a82017944a4a1ff3",
    measurementId: "G-9GDMWVPV2P"
}

var fireapp;
try {
    firebase.initializeApp(config);
} catch (error) {
    console.log(error.message);
}
export default fireapp;

const initial = {

}

function fireReducer(state = initial, action) {
    switch (action.type) {
        case "TESTACTION":
            return state;
        default:
            return state;
    }
}

export function initiStore(state = initial) {
    return createStore(fireReducer, state, applyMiddleware(thunkMiddleware))
}
