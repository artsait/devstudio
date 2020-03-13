import React from "react";
import "./my-posts.css";
import Post from "./post";

let posts = [
  {id: 1, mess: 'Hello', like:10},
  {id: 2, mess: 'Super. My First post`s', like:32},
]

let postsElements = posts
  .map( p => <Post mess={p.mess} like={p.like}/>);

const MyPosts = () => {
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
