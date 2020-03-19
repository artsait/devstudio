import React from "react";
import {
  apdateNewMessageBodyCreator,
  sendMessageCreator
} from "../../redux/messages-reducer";

import Dialogs from "./dialogs";
import {connect} from "react-redux";

let mapStateToProps = state => {
  console.log(state)
  return {
    messagesPage: state.messagesPage
  };
};

let mapDispatchToProps = dispatch => {
  return {
    apdateNewMessageBody: body => {
      dispatch(apdateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  };
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
