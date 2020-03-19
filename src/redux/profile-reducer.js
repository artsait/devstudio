const ADD_POST = "ADD_POST";
const APDATE_NEW_POST_TEXT = "APDATE_NEW_POST_TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        mess: state.newPostText,
        like: 0
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case APDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
        return state;
  }
};

export const addPostActionCreator = () => ({
    type: ADD_POST
  })
  
  export const apdateNewPostTextActionCreator = text => ({
    type: APDATE_NEW_POST_TEXT,
    newText: text
  })

export default profileReducer;
