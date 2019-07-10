import React, { Component } from "react";
import logo from "../static/images/llb/logo.jpg";

class Header extends Component {
  render() {
    return (
      <div className="row backgroundColor mb-1">
        <div className="col-sm-6 header-text">
          <h3>Trojan Vault</h3>
        </div>
        <div className="col-sm-6 mt-2 mb-2 pr-2 text-right">
          <img src={logo} alt="LOGO" />
        </div>
      </div>
    );
  }
}

export default Header;
