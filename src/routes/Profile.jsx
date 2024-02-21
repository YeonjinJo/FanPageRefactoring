import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

import MenuBar from "../layout/MenuBar";

const Profile = () => {
  const token = useSelector((state) => state.auth.token);

  const profileClickHandler = async () => {
    const {data} = await axios.get(
      `${process.env.REACT_APP_AUTH_SERVER_ADDRESS}/user`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(data.nickname);
  };

  return (
    <>
      <MenuBar />
      <button onClick={profileClickHandler}>test</button>
    </>
  );
};

export default Profile;
