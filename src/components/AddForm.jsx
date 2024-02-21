import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

import { addBoard } from "../redux/modules/boardSlice";
import {
  StForm,
  StSection,
  StInput,
  StSelect,
  StTextarea,
  StButton,
} from "../styles/MyStyles";
import Jobs from "./Jobs";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const titleRef = useRef();
  const [receiver, setReceiver] = useState("/job0");
  const [addresser, setAddresser] = useState("");
  const addresserRef = useRef();
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const navigate = useNavigate();
  const id = uuid();
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth()+1).toString().padStart(2,'0');
    const date = today.getDate().toString().padStart(2,'0');
    const hours = today.getHours().toString().padStart(2,'0');
    const minutes = today.getMinutes().toString().padStart(2,'0');
    const seconds = today.getSeconds().toString().padStart(2,'0');
    const timeString = `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;

    event.preventDefault();
    if (!title) {
      alert("Title is Empty!");
      titleRef.current.focus();
    } else if (!addresser) {
      alert("Addresser is Empty!");
      addresserRef.current.focus();
    } else if (!password) {
      alert("Set Your Password!");
      passwordRef.current.focus();
    } else if (!content) {
      alert("No Letter Content!");
      contentRef.current.focus();
    } else {
      if (window.confirm("Register Your Message?")) {
        const message = {
          id,
          title,
          receiver,
          addresser,
          password,
          timeString,
          content,
        };

        dispatch(addBoard(message));

        alert("Registered!");
        navigate(receiver);

        setTitle("");
        setAddresser("");
        setPassword("");
        setContent("");
      } else {
        alert("Cancelled");
      }
    }
  };

  return (
    <StForm onSubmit={onSubmitHandler}>
      <StSection>
        <label>Title</label>
        <StInput
          id={id + "title"}
          type="text"
          value={title}
          ref={titleRef}
          placeholder="Title → Less than 10 char"
          maxLength={10}
          onChange={(event) => setTitle(event.target.value)}
        />
      </StSection>
      <StSection>
        <label>Receiver</label>
        <StSelect
          id={id + "receiver"}
          type="text"
          value={receiver}
          onChange={(event) => setReceiver(event.target.value)}
        >
          {Jobs().jobList.map((value, index) => (
            <option value={Jobs().path[index]} key={index}>
              {value + " Yeonjin"}
            </option>
          ))}
        </StSelect>
      </StSection>
      <StSection>
        <label>Addresser</label>
        <StInput
          id={id + "addresser"}
          type="text"
          value={addresser}
          ref={addresserRef}
          placeholder="Addresser → Less than 5 char"
          maxLength={5}
          onChange={(event) => setAddresser(event.target.value)}
        />
      </StSection>
      <StSection>
        <label>Password</label>
        <StInput
          id={id + "password"}
          type="password"
          value={password}
          ref={passwordRef}
          placeholder="Password → Less than 8 char"
          maxLength={8}
          onChange={(event) => setPassword(event.target.value)}
        />
      </StSection>
      <StSection>
        <label>Content</label>
        <StTextarea
          id={id + "content"}
          rows={5}
          value={content}
          ref={contentRef}
          placeholder="Content → Less than 100 char"
          maxLength={1000}
          onChange={(event) => setContent(event.target.value)}
        />
      </StSection>

      <StButton>Send</StButton>
    </StForm>
  );
};

export default AddForm;
