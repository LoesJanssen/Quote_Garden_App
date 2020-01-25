import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.text}
          {"By:"}
          {this.props.author}
        </h2>
      </div>
    );
  }
}
