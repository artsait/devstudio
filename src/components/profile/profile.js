import React from "react";
import "./profile.css";
import MyPosts from "./my-posts";
import ProfileInfo from "./profile-info";

const Profile = props => {
  
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
