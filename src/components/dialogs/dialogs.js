import React from "react";

import "./dialogs.css";
import Dialog from "./dialog";
import Message from "./message";

let dialogs = [
  { id: 1, name: "Иван" },
  { id: 2, name: "Ирина" },
  { id: 3, name: "Сергей" },
  { id: 4, name: "Александр" },
  { id: 5, name: "Павел" },
  { id: 6, name: "Алексей" },
  { id: 7, name: "Антон" }
];

let dialogsElements = dialogs.map(dialog => (
  <Dialog name={dialog.name} id={dialog.id} />
));

let messages = [
  { id: 1, text: "Привет" },
  { id: 2, text: "Как продвигается работа над проектом?" },
  { id: 3, text: "Сколько нужно времени?" },
  { id: 4, text: "Отлично" },

];

let messagesElements = messages.map(message => (
  <Message id={message.id} text={message.text} />
));

const Dialogs = () => {
  return (
    <div className="dialogs">
      {/* <div className="titlepages">Dialogs</div> */}
      <div className="dialogs-list">{dialogsElements}</div>
      <div className="dialogs-display">{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
