import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/mdbreact/dist/css/mdb.css";
import "./index.css";
import "./App.css";
import "./nav.css";
import "./static/css/llb/llb.css";
import { Provider } from "react-redux";

import App from "./App";
import basestore from "./reducers/baseStore";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={basestore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
