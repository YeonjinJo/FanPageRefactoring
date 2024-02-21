import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Password from "./Password";
import { StButton } from "../styles/MyStyles";
import { deleteBoard } from "../redux/modules/boardSlice";

const DeleteHandler = (props) => {
  const boardItems = useSelector((state) => state.boardItems.boardItems);

  const dispatch = useDispatch();
  const list = useLocation().state.list;
  const id = useLocation().state.id;
  const navigate = useNavigate();

  const backToList = () => {
    navigate(list, { replace: true });
  };

  const passwordInput = () => {
    if(!props.passwordOpen) {props.setPasswordOpen(true)}
  };

  const deleteHandler = () => {
    const target = boardItems.filter((element) => id === element.id);
    if (props.password === target[0].password) {
      if (window.confirm("Really Remove This Letter?")) {
        dispatch(deleteBoard(...target));
        backToList();
      } else {
        props.setPassword("");
      }
    } else {
      alert("Wrong Password!");
      props.setPassword("");
    }
  };

  return (
    <>
      <StButton className="backButton" onClick={backToList}>
        Back to List
      </StButton>
      <StButton className="deleteButton" onClick={!props.passwordOpen ? passwordInput : deleteHandler}>
        Delete
      </StButton>
      <Password
        id={id}
        passwordOpen={props.passwordOpen}
        password={props.password}
        setPassword={props.setPassword}
      />
    </>
  );
};

export default DeleteHandler;
