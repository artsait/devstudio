import React from "react";

import "./dialogs.css";
import Dialog from "./dialog";
import Message from "./message";

const Dialogs = props => {
  let state = props.messagesPage;

  let dialogsElements = state.dialogs.map(dialog => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messages.map(message => (
    <Message id={message.id} text={message.text} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = e => {
    let body = e.target.value;
    props.apdateNewMessageBody(body)
  };

  return (
    <div className="dialogs">
      <div className="dialogs-list">{dialogsElements}</div>
      <div className="dialogs-display">
        <div>{messagesElements}</div>
        <div>
          <textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
            placeholder="enter your message"
          />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
