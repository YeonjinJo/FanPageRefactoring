import React, { useEffect } from "react";
import AddForm from "../components/AddForm";
import MenuBar from "../layout/MenuBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Letter() {
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
      <AddForm />
    </>
  );
}

export default Letter;
