import React, { Component } from "react";
import { connect } from "react-redux";

import { userLogin } from "../actions/UserActions";

class AddDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadState: false
    };
  }
  uploadDoc = () => {
    this.setState({
      uploadState: true
    });
  };

  render() {
    var Uploadsuccess = this.state.uploadState && (
      <div className="row col-md-12 mt-2">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="row">
            <b className="row">Document Uploaded Successfully!!</b>
          </div>
        </div>
      </div>
    );
    return (
      <div className="card col-md-12">
        <div className="card-header">
          <b>Add Document</b>{" "}
        </div>
        <div className="card-body">
          <div className="row col-md-12">
            <div className="col-md-2" />
            <div className="col-md-8">
              <div className="row">
                <b className="row">Document Name:</b>
              </div>
              <div className="row mb-3">
                <input
                  className="form-control"
                  style={{ width: "100%" }}
                  type="text"
                  placeholder="Eg: Passport"
                  id="username"
                  onChange={this.setValue}
                />
              </div>
              <div className="row">
                <b className="row">Identifier:</b>
              </div>
              <div className="row mb-3">
                <input
                  className="form-control"
                  style={{ width: "100%" }}
                  type="text"
                  placeholder="Eg: TI12345"
                  id="password"
                  onChange={this.setValue}
                />
              </div>
              <div className="row">
                <b className="row">File:</b>
              </div>
              <div className="row mb-3">
                <div className="input-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                    >
                      Choose Doc file in JPEG/PDF
                    </label>
                  </div>
                </div>
              </div>
              <div className="row text-center">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={this.uploadDoc}
                >
                  Upload Document
                </button>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
          {Uploadsuccess}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginState: state.userReducer.loginState,
  documents: state.userReducer.user.documents
});

export default connect(
  mapStateToProps,
  { userLogin }
)(AddDocument);
