import React, { Component } from "react";
import Content from "../components/Content";
import TransactionDetails from "../components/TransactionDetails";

class NavBarTransactions extends Component {
  constructor() {
    super();
    this.state = {
      transClick: true
    };
  }

  transClicked = () => {
    this.setState({ transClick: !this.state.transClick });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div
            className="nav nav-pills nav-fill"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="horizontal"
          >
            <a
              className="nav-link lbg-tab active"
              id="v-pills-account-tab"
              data-toggle="pill"
              href="#v-pills-account"
              role="tab"
              aria-controls="v-pills-account"
              aria-selected="true"
            >
              Account Balance
            </a>
            <a
              className="nav-link lbg-tab"
              id="v-pills-trans-tab"
              data-toggle="pill"
              href="#v-pills-trans"
              role="tab"
              aria-controls="v-pills-trans"
              aria-selected="false"
              onClick={this.transClicked}
            >
              Transaction Details
            </a>
          </div>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-account"
            role="tabpanel"
            aria-labelledby="v-pills-account-tab"
          >
            <div className="row">
              <Content />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-trans"
            role="tabpanel"
            aria-labelledby="v-pills-trans-tab"
          >
            <div className="row">
              <TransactionDetails transClick={this.state.transClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarTransactions;
