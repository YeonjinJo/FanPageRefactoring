import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StLoginButton, StLoginForm, StLoginInput } from "../styles/MyStyles";
import { useNavigate } from "react-router-dom";

function ModifyProfile() {
  const [nickname, setNickname] = useState("");
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const onChange = (event) => {
    setNickname(event.target.value);
  };

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
    setNickname(data.nickname);
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const updateProfile = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nickname", nickname);
    await axios.patch(
      `${process.env.REACT_APP_AUTH_SERVER_ADDRESS}/profile`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    navigate("/profile");
  };

  return (
    <StLoginForm>
      <StLoginInput
        name="nickname"
        type="string"
        value={nickname}
        onChange={onChange}
        minLength={1}
        maxLength={6}
        required
      />
      <StLoginButton onClick={updateProfile}>Update</StLoginButton>
    </StLoginForm>
  );
}

export default ModifyProfile;
