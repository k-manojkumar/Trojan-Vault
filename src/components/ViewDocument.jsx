import React, { Component } from "react";
import { connect } from "react-redux";

import { userLogin } from "../actions/UserActions";
import LoginRequired from "./LoginRequired";
import wip from "../static/images/WorkInProgress.jpg";
import DocumentList from "./DocumentList";

class ViewDocuments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getDocsRow = (doc, i) => {
    return (
      <div className="card mb-2" key={i}>
        <div className="card-header"> {doc.doc_name}</div>
        <div className="card-body">
          <div className="row col-md-12">
            <div className="col-md-6">
              <img
                src="../static/images/WorkInProgress.jpg"
                class="img-fluid"
                alt="Responsive image"
              />
            </div>
            <div className="col-md-6">{doc.doc_name}</div>
          </div>
        </div>
      </div>
    );
  };

  content = () => {
    console.log(this.props.loginState);

    switch (this.props.loginState) {
      case true:
        return <DocumentList />;
      case false:
        return <LoginRequired />;
    }
  };
  render() {
    return <div>{this.content()}</div>;
  }
}

const mapStateToProps = state => ({
  loginState: state.userReducer.loginState,
  documents: state.userReducer.user.documents
});

export default connect(
  mapStateToProps,
  { userLogin }
)(ViewDocuments);
