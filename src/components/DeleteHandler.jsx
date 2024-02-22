import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { StButton } from "../styles/MyStyles";
import { deleteBoard } from "../redux/modules/boardSlice";
import LoadProfile from "./LoadProfile";

const DeleteHandler = () => {
  const boardItems = useSelector((state) => state.boardItems.boardItems);

  const dispatch = useDispatch();
  const list = useLocation().state.list;
  const id = useLocation().state.id;
  const navigate = useNavigate();

  const backToList = () => {
    navigate(list, { replace: true });
  };

  const target = boardItems.filter((element) => id === element.id);

  const deleteHandler = () => {
    if (window.confirm("Really Remove This Letter?")) {
      dispatch(deleteBoard(...target));
      backToList();
    }
  };

  const { email } = LoadProfile();
  const comparison = target[0].email === email;

  return (
    <>
      <StButton className="backButton" onClick={backToList}>
        Back to List
      </StButton>
      {comparison ? (
        <StButton className="deleteButton" onClick={deleteHandler}>
          Delete
        </StButton>
      ) : (
        <></>
      )}
    </>
  );
};

export default DeleteHandler;
