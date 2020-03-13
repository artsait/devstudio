import React from "react";
import "./profile.css";
import MyPosts from "./my-posts";
import ProfileInfo from "./profile-info";

const Profile = () => {
  return (
    <div className="profile">
       <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
