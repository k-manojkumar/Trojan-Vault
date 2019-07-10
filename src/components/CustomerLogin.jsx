import React, { Component } from "react";
import { connect } from "react-redux";

import { userLogin } from "../actions/UserActions";

class CustomerLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  setValue = e => {
    console.log(e.target.id + " : " + e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  checkLogin = () => {
    this.props.userLogin(this.state.username, this.state.password);
  };

  render() {
    var loginsuccess = this.props.loginState && (
      <div className="row col-md-12 mb-2">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="row">
            <b className="row">Login Success!!</b>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        {loginsuccess}
        <div className="row col-md-12">
          <div className="col-md-2" />
          <div className="col-md-8">
            <div className="row">
              <b className="row">User Name:</b>
            </div>
            <div className="row mb-3">
              <input
                className="form-control"
                style={{ width: "100%" }}
                type="text"
                placeholder="Name"
                id="username"
                onChange={this.setValue}
              />
            </div>
            <div className="row">
              <b className="row">Password:</b>
            </div>
            <div className="row mb-3">
              <input
                className="form-control"
                style={{ width: "100%" }}
                type="password"
                placeholder="password"
                id="password"
                onChange={this.setValue}
              />
            </div>
            <div className="row text-center">
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.checkLogin}
              >
                Login
              </button>
            </div>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginState: state.userReducer.loginState
});

export default connect(
  mapStateToProps,
  { userLogin }
)(CustomerLogin);
