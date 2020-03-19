import React from "react";
import {
  addPostActionCreator,
  apdateNewPostTextActionCreator
} from "../../../redux/profile-reducer";

import MyPosts from "./my-posts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer> 
      { store => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (text) => {
          const action = apdateNewPostTextActionCreator(text);
          store.dispatch(action);
        }

        return (
        <MyPosts apdateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}/>
        )

      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
