import React from "react";
import { StFooter } from "../styles/MyStyles";
import { useSelector } from "react-redux";
import SearchTab from "./SearchTab";

function Footer() {
  const token = useSelector((state) => state.auth.token);

  return !token ? <StFooter></StFooter> : <SearchTab />;
}

export default Footer;
