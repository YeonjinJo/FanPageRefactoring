import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  StInputReadOnly,
} from "../styles/MyStyles";
import Jobs from "./Jobs";
import axios from "axios";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const titleRef = useRef();
  const [receiver, setReceiver] = useState("/job0");
  const [addresser, setAddresser] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const navigate = useNavigate();
  const id = uuid();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const loadProfile = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_AUTH_SERVER_ADDRESS}/user`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setAddresser(data.nickname)
    setEmail(data.id)
  };
  loadProfile();

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
          email,
          timeString,
          content,
        };

        dispatch(addBoard(message));

        alert("Registered!");
        navigate(receiver);

        setTitle("");
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
        <StInputReadOnly
          id={id + "addresser"}
          type="text"
          value={addresser}
          readOnly
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
