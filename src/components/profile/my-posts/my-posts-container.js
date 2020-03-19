import React from "react";
import {
  addPostActionCreator,
  apdateNewPostTextActionCreator
} from "../../../redux/profile-reducer";

import MyPosts from "./my-posts";
import {connect} from "react-redux";


let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};


let mapDispatchToProps = dispatch => {
  return {
    addPost: text => {
      const action = apdateNewPostTextActionCreator(text);
      dispatch(action);
    },
    apdateNewPostText: () => {
      let addPost = () => {
        dispatch(addPostActionCreator());
      };
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
