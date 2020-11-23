const { createElement } = require("react");

let dom = document.querySelector("#root");
let element = React.createElement(
    "div",{},[
        React.createElement(
            "h2",{},"Hello"
        ),
        React.createElement(
            "h3",{},"React Sample"
        ),
        React,createElement(
            "ul",{},[
                React,createElement(
                    "li",{},"first"
                ),
                React,createElement(
                    "li",{},"Second"
                ),
                React.createElement(
                    "li",{},"third"
                ),
            ]
        ),
    ]);
ReactDOM.render(element, dom);