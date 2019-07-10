import React, { Component } from "react";

import Header from "./components/Header";
import { NavBarSideSmall } from "./navbar/NavBarSideSmall";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentName: "ACCOUNT_BALANCE"
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <NavBarSideSmall />
      </div>
    );
  }
}

export default App;
