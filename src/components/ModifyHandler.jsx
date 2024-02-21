import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { modifyBoard } from "../redux/modules/boardSlice";
import {
  StButton,
  StSection,
  StInput,
  StTextarea,
  StModifyContainer,
} from "../styles/MyStyles";
import LoadProfile from "./LoadProfile";

function ModifyHandler() {
  const [modifyOpen, setModifyOpen] = useState(false);
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const list = useLocation().state.list;
  const id = useLocation().state.id;

  const target = boardItems.filter((element) => id === element.id);
  const [newTitle, setNewTitle] = useState(target[0].title);
  const [newContent, setNewContent] = useState(target[0].content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modifyForm = () => {
    setModifyOpen(true);
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
        addresser: target[0].addresser,
        email: target[0].email,
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

  const { email } = LoadProfile();
  const comparison = target[0].email === email;

  return (
    <>
      {!modifyOpen ? (
        <>
          <h3>{target[0].title}</h3>
          <p className="addresser">from. {target[0].addresser}</p>
          <p className="time">{target[0].timeString}</p>
          <p className="content">{target[0].content}</p>
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
      {comparison ? (
        <StButton
          className="modifyButton"
          onClick={!modifyOpen ? modifyForm : modifyHandler}
        >
          Modify
        </StButton>
      ) : (
        <></>
      )}
    </>
  );
}

export default ModifyHandler;
