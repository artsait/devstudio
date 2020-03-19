import React from "react";
import {
  apdateNewMessageBodyCreator,
  sendMessageCreator
} from "../../redux/messages-reducer";

import Dialogs from "./dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer> 
      { store => {
        let state = store.getState();

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = body => {
          store.dispatch(apdateNewMessageBodyCreator(body));
        };
        return (
          <Dialogs
            apdateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            messagesPage={state.messagesPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
