import React, { Component } from "react";

import wip from "../static/images/WorkInProgress.jpg";
import ppimage from "../static/images/image1.jpeg";
import dlimage from "../static/images/image2.jpeg";
import utiimage from "../static/images/image3.jpeg";

class DocumentList extends Component {
  state = {};
  render() {
    return (
      <div className="card col-md-12">
        <div className="card-header"> Document List</div>
        <div className="card-body">
          <div className="card mb-2">
            <div className="card-header">
              Passport <span id="ca1" className="fa fa-check-circle pl-2" />
            </div>
            <div className="card-body">
              <div className="row col-md-12">
                <div className="col-md-5">
                  <img src={ppimage} class="img-fluid" alt="Responsive image" />
                </div>
                <div className="col-md-7">
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Number: </label>
                    </div>
                    <div className="col-md-6">
                      <label>123456 </label>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Nationality: </label>
                    </div>
                    <div className="col-md-6">
                      <label>United Kingdon </label>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Date of Birth: </label>
                    </div>
                    <div className="col-md-6">
                      <label>01/01/1990 </label>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Sex: </label>
                    </div>
                    <div className="col-md-6">
                      <label>Male</label>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Place of Birth: </label>
                    </div>
                    <div className="col-md-6">
                      <label>Manchester</label>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Date of Issue: </label>
                    </div>
                    <div className="col-md-6">
                      <label>01/04/2018</label>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Date of Expiry: </label>
                    </div>
                    <div className="col-md-6">
                      <label>31/03/2028</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header">
              Driving Lisence
              <span id="ca1" className="fa fa-times-circle pl-2" />
            </div>
            <div className="card-body">
              <div className="row col-md-12">
                <div className="col-md-5">
                  <img src={dlimage} class="img-fluid" alt="Responsive image" />
                </div>
                <div className="col-md-7">
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Number: </label>
                    </div>
                    <div className="col-md-6">
                      <label>123456 </label>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Surname: </label>
                    </div>
                    <div className="col-md-6">
                      <label>Surname </label>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>GivenName: </label>
                    </div>
                    <div className="col-md-6">
                      <label>GivenName </label>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Date of Birth: </label>
                    </div>
                    <div className="col-md-6">
                      <label>01/01/1990 </label>
                    </div>
                  </div>

                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Date of Issue: </label>
                    </div>
                    <div className="col-md-6">
                      <label>01/04/2018</label>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Date of Expiry: </label>
                    </div>
                    <div className="col-md-6">
                      <label>31/03/2028</label>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Address: </label>
                    </div>
                    <div className="col-md-6">
                      <label>House Number, &nbsp;</label>
                      <label>Street Name&nbsp;</label>
                      <br />
                      <label>County,&nbsp;</label>
                      <br />
                      <label>City, &nbsp;</label>
                      <br />
                      <label>Post Code</label>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Classes: </label>
                    </div>
                    <div className="col-md-6">
                      <label>------</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header">
              {" "}
              Util Bills{" "}
              <span id="ca1" className="fa fa-exclamation-circle pl-2" />
            </div>
            <div className="card-body">
              <div className="row col-md-12">
                <div className="col-md-5">
                  <img
                    src={utiimage}
                    class="img-fluid"
                    alt="Responsive image"
                  />
                </div>
                <div className="col-md-7">
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Number: </label>
                    </div>
                    <div className="col-md-6">
                      <label>123456 </label>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Type: </label>
                    </div>
                    <div className="col-md-6">
                      <label>Council Tax </label>
                    </div>
                  </div>

                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Date of Issue: </label>
                    </div>
                    <div className="col-md-6">
                      <label>01/04/2018</label>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-6">
                      <label>Address: </label>
                    </div>
                    <div className="col-md-6">
                      <label>House Number, &nbsp;</label>
                      <label>Street Name&nbsp;</label>
                      <br />
                      <label>County,&nbsp;</label>
                      <br />
                      <label>City, &nbsp;</label>
                      <br />
                      <label>Post Code</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DocumentList;
