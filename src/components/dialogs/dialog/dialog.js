import React from "react";
import "./dialog.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className="dialogs-list__name">
      <NavLink to={"/dialogs/" + props.id} className="dialogs-list__link">
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
