import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const initial = {
    message: "START",
    data: [],
    number: [],
    result: 0
}

//レデューサー
function counterReducer(state = initial, action) {
    switch (action.type) {
        //計算
        case "ENTER":
            let data2 = state.data.slice();
            let s = action.value;
            data2.unshift(s);
            let num = s.replace(/[^0-9]/g, "");
            let number2 = state.number.slice();
            number2.unshift(num);
            let result = (state.result * 1) + (num * 1);
            return {
                message: "ENTER",
                data: data2,
                number: number2,
                result: result,
            };

        //reset
        case "RESET":
            return {
                message: "RESET",
                data: [],
                number: [],
                result: 0,
            };
        default:
            return state;
    }
}

//redux-store関係
export function initStore(state = initial) {
    return createStore(calcReducer, state, applyMiddleware(thunkMiddleware))
}
