import React, { Component } from "react";
import wip from "../static/images/WorkInProgress.jpg";

class ToBeImplemented extends Component {
  render() {
    return (
      <div className="card mt-1 text-center">
        <div class="card-header">
          <b style={{ fontSize: "18px" }}>
            This Functionality will be available soon
          </b>
        </div>
        <div className="mt-3">
          <img src={wip} />
        </div>
      </div>
    );
  }
}

export default ToBeImplemented;
