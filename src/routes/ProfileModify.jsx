import React, { useEffect } from "react";
import MenuBar from "../layout/MenuBar";
import ModifyProfile from "../components/ModifyProfile";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProfileModify() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) {navigate("/")} 
  }, []);

  return (
    <>
      <MenuBar />
      <ModifyProfile />
    </>
  );
}

export default ProfileModify;
