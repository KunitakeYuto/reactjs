import React, { Component } from "react";
import { connect } from "react-redux";

class Calc extends Component {
    style = {
        fontSize: "12pt",
        padding: "5px 10px",
    }

    constructor(props) {
        super(props);
        this.state = {
            input: "",
        };
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.doAction = this.doAction.bind(this);
        this.reset = this.reset.bind(this);

    }

    onChange(e) {
        this.setStat({
            input: e.target.value
        });
    }

    onKeyPress(e) {
        //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        if (event.keyCode == 13) {
            this.doAction(e);
        }
    }

    doAction(e) {
        this.setState({
            input: "",
        });
        return this.props.dispatch({ type: "ENTER", value: this.state.input });
    }

    reset() {
        this.setState({
            input: "",
        });
        return this.props.dispatch({ type: "RESET" });
    }

    render() {
        let result = [];
        let n = this.props.data.length;
        for (let i = 0; 1 < n; i++) {
            result.push(
                <tr key={i}>
                    <th>{this.props.data[i]}</th>
                    <td>{this.props.number[i]}</td>
                </tr>
            );
        }

        return (
            <div>
                <p>TOTAL:{this.props.result}</p>
                <input type="text" style={this.style} size="40" value={this.state.input} onChange={this.onChange} onKeyPress={this.onKeyPress} />
                <button style={this.style} onClick={this.doAction}>Enter</button>
                <button style={this.style} onClick={this.reset}>Reset</button>
                <hr />
                <table>
                    <tbody>{result}</tbody>
                </table>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

Calc = connect((state) => state)(Calc);
export default Calc;