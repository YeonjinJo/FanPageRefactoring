import React from "react";
import { Route, Routes } from "react-router-dom";

import Board from "../routes/Board";
import Home from "../routes/Home";
import Letter from "../routes/Letter";
import Detail from "../routes/Detail";
import Search from "../routes/Search";
import Main from "../routes/Main";
import Profile from "../routes/Profile";

import { StContainer } from "../styles/MyStyles";
import { ToastContainer } from "react-toastify";
import Register from "../routes/Register";
import ProfileModify from "../routes/ProfileModify";

function Router() {
  return (
    <StContainer>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/job0" element={<Board />} />
        <Route path="/job1" element={<Board />} />
        <Route path="/job2" element={<Board />} />
        <Route path="/job3" element={<Board />} />
        <Route path="/job4" element={<Board />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/modify" element={<ProfileModify />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <ToastContainer />
    </StContainer>
  );
}

export default Router;
