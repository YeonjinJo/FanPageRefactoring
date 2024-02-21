import React, { useEffect } from "react";
import intro from "../assets/img/intro.png";

import { StImg } from "../styles/MyStyles";
import MenuBar from "../layout/MenuBar";
import { useSelector } from "react-redux";

const Home = () => {
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
		console.log(token)
  }, []);

  return (
    <>
      <MenuBar />
      <StImg src={intro} alt="Introduction to Yeonjin" />
    </>
  );
};

export default Home;
