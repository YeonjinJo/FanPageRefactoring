import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../redux/modules/authSlice";

function SignOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const signOutFunction = () => {
    const isSignOut = window.confirm("Sign out?");
    if (!isSignOut) return;

    dispatch(removeUser(token))
    navigate("/", { replace: true });
  };

  return (
    <div>
      {!token ? <></> : <button onClick={signOutFunction}>Sign out</button>}
    </div>
  );
}

export default SignOut;
