import React, { Component } from "react";
import wip from "../static/images/login.jpg";

class LoginRequired extends Component {
  render() {
    return (
      <div className="card mt-1 text-center">
        <div className="card-header">
          <b style={{ fontSize: "18px" }}>
            Please login for this functionality
          </b>
        </div>
        <div className="mt-3">
          <img src={wip} />
        </div>
      </div>
    );
  }
}

export default LoginRequired;
