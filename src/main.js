import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import state from "./redux/state"

ReactDom.render(<App state={state}/>, document.querySelector("#app"));
