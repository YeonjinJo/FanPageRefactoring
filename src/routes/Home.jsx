import intro from "../assets/img/intro.png";

import { StImg } from "../styles/MyStyles";
import MenuBar from "../layout/MenuBar";

const Home = () => {

  return (
    <>
      <MenuBar />
      <StImg src={intro} alt="Introduction to Yeonjin" />
    </>
  );
};

export default Home;
