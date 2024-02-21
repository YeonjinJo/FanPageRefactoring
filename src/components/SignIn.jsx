import axios from "axios";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { checkUser } from "../redux/modules/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  StLoginButton,
  StLoginForm,
  StLoginInput,
  StLoginSection,
  StMoveButton,
  StSign,
} from "../styles/MyStyles";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const user = {
      id: email,
      password,
    };
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_AUTH_SERVER_ADDRESS}/login`,
        user
      );
      dispatch(checkUser(data.accessToken));
      toast("Login Success!");
      navigate("/home");
    } catch (error) {
      toast("Login Failed!")
    }
  };

  return (
    <StLoginForm>
      <StLoginSection>
        <label>E-mail</label>
        <StLoginInput
          name="email"
          type="email"
          value={email}
          onChange={onChange}
          required
        />
      </StLoginSection>
      <StLoginSection>
        <label>Password</label>
        <StLoginInput
          name="password"
          type="password"
          value={password}
          onChange={onChange}
          required
        />
      </StLoginSection>
      <StSign>
        <StLoginButton onClick={submitHandler}>Sign in</StLoginButton>
        <StMoveButton to="/register">Sign up</StMoveButton>
      </StSign>
    </StLoginForm>
  );
}

export default SignIn;
