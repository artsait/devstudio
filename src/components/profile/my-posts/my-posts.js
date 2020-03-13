import React from "react";
import "./my-posts.css";
import Post from "./post";

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => (
    <Post mess={p.mess} like={p.like} />
  ))

  return (
    <div className="profile">
      <div>
        <form>
          <input type="text"></input>
          <button>add post</button>
        </form>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
