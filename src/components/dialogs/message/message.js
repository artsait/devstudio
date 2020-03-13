import React from "react";

import "./message";

const Message = (props) => {
  return (
    <div className="dialogs-display__message">
      <span className="dialogs-display__mtext">{props.text}</span>
    </div>
  );
}

export default Message;
