const APDATE_NEW_MESSAGE_BODY = "APDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const messagesReducer = (state, action) => {
  switch (action.type) {
    case APDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 7, text: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
  });
  
  export const apdateNewMessageBodyCreator = body => ({
    type: APDATE_NEW_MESSAGE_BODY,
    body: body
  });

export default messagesReducer;
