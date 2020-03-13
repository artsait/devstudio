import React from "react";
import "./profile.css";
import MyPosts from "./my-posts";
import ProfileInfo from "./profile-info";

const Profile = (props) => {

  console.log(props);

  return (
    <div className="profile">
       <ProfileInfo />
      <MyPosts posts={props.state.posts}/>
    </div>
  );
};

export default Profile;
