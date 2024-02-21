import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const token = useSelector((state) => state.auth.token);

  const response = axios.get(
    `${process.env.REACT_APP_AUTH_SERVER_ADDRESS}/user`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log(response);

  return <div>My Profile</div>;
};

export default MyProfile;
