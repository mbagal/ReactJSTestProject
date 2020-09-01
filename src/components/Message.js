import React, { Component } from "react";

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome visitor",
    };
  }

  changeMessage() {
    this.setState({ message: "Thanks for subscribing 1" });
    console.log("Thanks for click");
  }
  changeMessageIt = () => {
    this.setState({ message: "Thanks for subscribing" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={() => this.changeMessage()}>Subscribe</button> */}
        {/* <button onClick={this.changeMessage.bind(this)}>Subscribe</button> */}
        <button onClick={this.changeMessageIt}>Subscribe</button>
      </div>
    );
  }
}
