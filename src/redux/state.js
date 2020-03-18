const ADD_POST = "ADD-POST";
const APDATE_NEW_POST_TEXT = "APDATE-NEW-POST-TEXT";

const APDATE_NEW_MESSAGE_BODY = "APDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, mess: "hello", like: "12" },
        { id: 2, mess: "this my posts", like: "14" },
        { id: 3, mess: "bla bla bla", like: "26" }
      ],
      newPostText: ""
    },
    messagesPage: {
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
      newMessageBody: ''
    }
  },
  _callSubscriber() {
    console.log("state изменен");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        mess: this._state.profilePage.newPostText,
        like: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "APDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
      // console.log(this._state);
    } else if (action.type === 'APDATE-NEW-MESSAGE-BODY') {
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === 'SEND-MESSAGE') {
      let body =  this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = '';
      this._state.messagesPage.messages.push({ id: 7, text: body });
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST
});

export const apdateNewPostTextActionCreator = text => ({
  type: APDATE_NEW_POST_TEXT,
  newText: text
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
});

export const apdateNewMessageBodyCreator = body => ({
  type:  APDATE_NEW_MESSAGE_BODY,
  body: body
});

export default store;
window.store = store;
