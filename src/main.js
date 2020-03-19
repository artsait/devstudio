import store from "./redux/store";
import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDom.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.querySelector("#app")
  );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
