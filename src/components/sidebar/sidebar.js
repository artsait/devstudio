import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="nav">
        <div className='item'>
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className='item'>
          <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div className='item'>
          <a>New</a>
        </div>
        <div className='item'>
          <a>Music</a>
        </div>
        <div className='item'>
          <a>Setting</a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
