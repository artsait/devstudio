import React from "react";
import "./profile.css";
import ProfileInfo from "./profile-info";
import MyPostsContainer from "./my-posts/my-posts-container";

const Profile = props => {
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
