import React from "react";
import { Route } from "react-router-dom";

import "./app.css";

import Header from "../components/header";
import Profile from "../components/profile";
import Sidebar from "../components/sidebar";
import Dialogs from "../components/dialogs";

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="app-content">
        <Route
          path="/dialogs"
          render={() => <Dialogs store={props.store} />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
      </div>
    </div>
  );
};

export default App;
