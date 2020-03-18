import React from "react";
import "./my-posts.css";
import Post from "./post";
import {
  addPostActionCreator,
  apdateNewPostTextActionCreator
} from "../../../redux/state";

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post mess={p.mess} like={p.like} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(apdateNewPostTextActionCreator(text));
  };

  return (
    <div className="profile">
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>add post</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
