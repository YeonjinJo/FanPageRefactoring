import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { StMoveButton, StProfileEmail, StProfileNickname } from "../styles/MyStyles";

const MyProfile = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const token = useSelector((state) => state.auth.token);

  const loadProfile = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_AUTH_SERVER_ADDRESS}/user`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setNickname(data.nickname)
    setEmail(data.id)
  };
  loadProfile();

  return (
    <>
      <StProfileNickname>{nickname}</StProfileNickname>
      <StProfileEmail>{email}</StProfileEmail>
      <StMoveButton to="/modify">Modify Profile</StMoveButton>
    </>
  );
};

export default MyProfile;
