import React, { Component } from "react";
import "./App.css";


class ClearButton extends Component {
  render() {
    return (
      <div className="botaosoma" onClick={() => this.props.handleClick()}>
        {this.props.children}
      </div>
    );
  }
}

export default ClearButton;