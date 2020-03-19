const APDATE_NEW_MESSAGE_BODY = "APDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messages: [
    { id: 1, text: "Привет" },
    { id: 2, text: "Как продвигается работа над проектом?" },
    { id: 3, text: "Сколько нужно времени?" },
    { id: 4, text: "Отлично" },
    { id: 4, text: "Еще одно сообщение" }
  ],
  dialogs: [
    { id: 1, name: "Иван" },
    { id: 2, name: "Ирина" },
    { id: 3, name: "Сергей" },
    { id: 4, name: "Александр" },
    { id: 5, name: "Павел" },
    { id: 6, name: "Алексей" },
    { id: 7, name: "Антон" }
  ],
  newMessageBody: ""
}

const messagesReducer = (state = initialState, action) => {
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
