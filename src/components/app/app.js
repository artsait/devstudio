import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import "./app.css";

import Header from "../header";
import Profile from "../profile";
import Sidebar from "../sidebar";
import Dialogs from "../dialogs";

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
        </div>
      </div>
    </Router>
  );
};

export default App;
