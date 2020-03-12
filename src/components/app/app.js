import React from "react";

import "./app.css";

import Header from "../header";
import Profile from "../profile";
import Sidebar from "../sidebar";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
};

export default App;
