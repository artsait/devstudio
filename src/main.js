import store from "./redux/redux-store";
import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./storeContext";

let rerenderEntireTree = state => {
  ReactDom.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App/>
      </StoreContext.Provider>
    </BrowserRouter>,
    document.querySelector("#app")
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
