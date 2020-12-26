import React, { Component } from "react";
import Header from "../components/Header";
import Fotter from "../components/Footer";
import style from "../static/Style";

class Layout extends Component {
    render() {
        return (
            <div>
                {style}
                <Header header={this.props.header} title={this.props.title} />
                {this.props.children}
                <Fotter footer="copyright SYODA-Tuyano" />
            </div>
        );
    }

}
export default Layout;