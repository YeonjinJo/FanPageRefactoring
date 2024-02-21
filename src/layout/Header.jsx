import React from "react";

import { StHeader, StTitle } from "../styles/MyStyles";
import SignOut from "../components/SignOut";

const Header = () => {
  return (
    <StHeader>
      <StTitle to={"/"}>YEONJIN UNIVERSE</StTitle>
      <SignOut />
    </StHeader>
  );
};

export default Header;

