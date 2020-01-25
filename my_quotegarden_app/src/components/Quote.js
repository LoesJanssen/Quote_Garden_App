import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.text}</h2>
        <h3>By: {this.props.author}</h3>
        <button>Like</button>
        <button>Dislike</button>
      </div>
    );
  }
}
