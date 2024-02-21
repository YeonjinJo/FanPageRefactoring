import React from "react";

import { StHeader, StTitle } from "../styles/MyStyles";
import SignOut from "../components/SignOut";
import { useSelector } from "react-redux";

const Header = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <StHeader>
      {!token ? (
        <StTitle to={"/"}>YEONJIN UNIVERSE</StTitle>
      ) : (
        <StTitle to={"/home"}>YEONJIN UNIVERSE</StTitle>
      )}
      <SignOut />
    </StHeader>
  );
};

export default Header;
