import React, { useEffect } from "react";
import SignIn from "../components/SignIn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Main() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {navigate("/home")} 
  }, []);

  return (
    <div>
      <SignIn />
    </div>
  );
}

export default Main;
