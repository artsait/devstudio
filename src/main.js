import store from "./redux/redux-store";
import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#app")
);
