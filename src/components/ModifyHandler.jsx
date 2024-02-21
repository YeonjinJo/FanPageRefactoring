import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Password from "./Password";
import { modifyBoard } from "../redux/modules/boardSlice";
import {
  StButton,
  StSection,
  StInput,
  StTextarea,
  StModifyContainer,
} from "../styles/MyStyles";

function ModifyHandler(props) {
  const [modifyOpen, setModifyOpen] = useState(false);
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const list = useLocation().state.list;
  const id = useLocation().state.id;

  const target = boardItems.filter((element) => id === element.id);
  const [newTitle, setNewTitle] = useState(target[0].title);
  const [newAddresser, setNewAddresser] = useState(target[0].addresser);
  const [newContent, setNewContent] = useState(target[0].content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modifyForm = () => {
    if (!props.passwordOpen) {
      props.setPasswordOpen(true);
    } else {
      if (props.password === target[0].password) {
        setModifyOpen(true);
      } else {
        alert("Wrong Password!");
        props.setPassword("");
      }
    }
  };

  const modifyHandler = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const date = today.getDate().toString().padStart(2, "0");
    const hours = today.getHours().toString().padStart(2, "0");
    const minutes = today.getMinutes().toString().padStart(2, "0");
    const seconds = today.getSeconds().toString().padStart(2, "0");
    const timeString = `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;

    if (target[0].title === newTitle) {
      alert("There is no any modification on title!");
    } else if (target[0].content === newContent) {
      alert("There is no any modification on content!");
    } else {
      const newBoard = {
        id: target[0].id,
        title: newTitle,
        receiver: target[0].receiver,
        addresser: newAddresser,
        password: target[0].password,
        timeString,
        content: newContent,
      };

      if (window.confirm("Really Modify This Letter?")) {
        dispatch(modifyBoard(newBoard));

        alert("Modified!");
        navigate(list);
      }
    }
  };

  return (
    <>
      {!modifyOpen ? (
        <>
          <h3>{props.element.title}</h3>
          <p className="addresser">from. {props.element.addresser}</p>
          <p className="time">{props.element.timeString}</p>
          <p className="content">{props.element.content}</p>
        </>
      ) : (
        <>
          <h3>Letter Modification</h3>
          <StModifyContainer className="content">
            <StSection>
              <label>Title</label>
              <StInput
                id={id + "title"}
                type="text"
                value={newTitle}
                maxLength={10}
                onChange={(event) => setNewTitle(event.target.value)}
              />
            </StSection>
            <StSection>
              <label>Addresser</label>
              <StInput
                id={id + "addresser"}
                type="text"
                value={newAddresser}
                maxLength={5}
                onChange={(event) => setNewAddresser(event.target.value)}
              />
            </StSection>
            <StSection>
              <label>Content</label>
              <StTextarea
                id={id + "content"}
                rows={5}
                value={newContent}
                maxLength={1000}
                onChange={(event) => setNewContent(event.target.value)}
              />
            </StSection>
          </StModifyContainer>
        </>
      )}
      <StButton
        className="modifyButton"
        onClick={!modifyOpen ? modifyForm : modifyHandler}
      >
        Modify
      </StButton>
      <Password
        id={id}
        passwordOpen={props.passwordOpen}
        password={props.password}
        setPassword={props.setPassword}
      />
    </>
  );
}

export default ModifyHandler;
