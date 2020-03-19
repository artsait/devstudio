import React from "react";
import "./my-posts.css";
import Post from "./post";

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post mess={p.mess} like={p.like} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.apdateNewPostText(text);
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
          <button onClick={onAddPost}>add post</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
