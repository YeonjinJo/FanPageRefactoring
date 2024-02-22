import intro from "../assets/img/intro.png";

import { StImg } from "../styles/MyStyles";
import MenuBar from "../layout/MenuBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <MenuBar />
      <StImg src={intro} alt="Introduction to Yeonjin" />
    </>
  );
};

export default Home;
