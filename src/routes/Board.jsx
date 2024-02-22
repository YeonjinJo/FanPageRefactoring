import React, { useEffect } from "react";
import BoardList from "../components/BoardList";
import MenuBar from "../layout/MenuBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Board = () => {
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
      <BoardList />
    </>
  );
};

export default Board;
