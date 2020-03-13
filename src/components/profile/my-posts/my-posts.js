import React from "react";
import "./my-posts.css";
import Post from "./post";

const MyPosts = () => {
  return (
    <div className="profile">
      <div>
        <input type="text"></input>
      </div>
      <div>
        <button>Send</button>{" "}
      </div>
      <Post mess="Privet friends" like="15" />
      <Post mess="It's my first post" like="24" />
    </div>
  );
};

export default MyPosts;
