import React from "react";
import { Route } from "react-router-dom";

import "./app.css";

import Header from "../components/header";
import Profile from "../components/profile";
import Sidebar from "../components/sidebar";
import DialogsContainer from "../components/dialogs/dialogs-container";

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="app-content">
        <Route
          path="/dialogs"
          render={() => <DialogsContainer />}
        />
        <Route path="/profile" render={() => <Profile />} />
      </div>
    </div>
  );
};

export default App;
