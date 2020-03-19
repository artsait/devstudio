import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import messagesReducer from "./messages-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  sidebar: sidebarReducer,
  messagesPage: messagesReducer
});

let store = createStore(reducers);

export default store;
