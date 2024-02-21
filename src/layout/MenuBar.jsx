import React from "react";
import { useLocation } from "react-router-dom";

import {
  StMenuContainer,
  StLetter,
  StLink,
  StMenuBar,
  StSign,
} from "../styles/MyStyles";
import Jobs from "../components/Jobs";

const MenuBar = () => {
  const currentLocation = useLocation().pathname;

  return (
    <StMenuBar>
      <StSign>
        <StLetter to={"/letter"}>Leave Your Message</StLetter>
        <StLetter to={"/profile"}>My Profile</StLetter>
      </StSign>
      <StMenuContainer>
        {Jobs().jobList.map((value, index) => {
          return (
            <StLink
              $check={currentLocation !== Jobs().path[index]}
              to={Jobs().path[index]}
              key={index}
            >
              {value}
            </StLink>
          );
        })}
      </StMenuContainer>
    </StMenuBar>
  );
};

export default MenuBar;
