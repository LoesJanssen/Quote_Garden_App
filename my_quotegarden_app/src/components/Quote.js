import React, { Component } from "react";

export default class Quote extends Component {
  state = {
    color: "black",
    like: 0,
    dislike: 0
  };

  getLike = () => {
    this.setState({
      color: "green",
      like: this.state.like + 1,
      dislike: this.state.dislike
    });
  };

  getDislike = () => {
    this.setState({
      color: "red",
      like: this.state.like,
      dislike: this.state.dislike + 1
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h2 style={{ color: this.state.color }}> {this.props.text}</h2>
        <h3> By:{this.props.author}</h3>
        <button onClick={this.getLike}>Like</button>
        <button onClick={this.getDislike}>Dislike</button>
      </div>
    );
  }
}
