import React from "react";

import "./dialogs.css";
import Dialog from "./dialog";
import Message from "./message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map(dialog => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messages.map(message => (
    <Message id={message.id} text={message.text} />
  ));

  return (
    <div className="dialogs">
      {/* <div className="titlepages">Dialogs</div> */}
      <div className="dialogs-list">{dialogsElements}</div>
      <div className="dialogs-display">{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
