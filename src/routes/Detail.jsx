import React, { useEffect } from "react";
import DetailPage from "../components/DetailPage";
import MenuBar from "../layout/MenuBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
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
      <DetailPage />
    </>
  );
}

export default Detail;
