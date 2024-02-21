import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  StLoginButton,
  StLoginForm,
  StLoginInput,
  StLoginSection,
  StMoveButton,
  StSign,
} from "../styles/MyStyles";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
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
      case "nickname":
        return setNickname(value);
      default:
        return;
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const user = {
      id: email,
      password,
      nickname,
    };
    try {
      await axios.post(
        `${process.env.REACT_APP_AUTH_SERVER_ADDRESS}/register`,
        user
      );
      toast("Sign up Success!");
      navigate("/");
    } catch (error) {
      toast("Sign up Failed!");
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
          minLength={6}
          maxLength={12}
          required
        />
      </StLoginSection>
      <StLoginSection>
        <label>Nickname</label>

        <StLoginInput
          name="nickname"
          type="string"
          value={nickname}
          onChange={onChange}
          minLength={1}
          maxLength={6}
          required
        />
      </StLoginSection>
      <StSign>
        <StMoveButton to="/">Back</StMoveButton>
        <StLoginButton onClick={submitHandler}>Sign up</StLoginButton>
      </StSign>
    </StLoginForm>
  );
}

export default SignUp;
