import React, { Component } from "react";
import CustomerLogin from "./CustomerLogin";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <CustomerLogin />
      </div>
    );
  }
}

export default Container;
