import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import "./app.css";

import Header from "../components/header";
import Profile from "../components/profile";
import Sidebar from "../components/sidebar";
import Dialogs from "../components/dialogs";

const App = props => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                state={props.state.messagesPage}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile state={props.state.profilePage} />}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
