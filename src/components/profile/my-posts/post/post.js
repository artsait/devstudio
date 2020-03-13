import React from "react";
import "./post.css";

const Post = props => {
  return (
    <div className="post">
      <div className="mess">{props.mess}</div>
      <div>like:{props.like}</div>
    </div>
  );
};

export default Post;
