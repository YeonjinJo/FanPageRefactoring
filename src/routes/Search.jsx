import React, { useEffect } from "react";
import SearchResult from "../components/SearchResult";
import MenuBar from "../layout/MenuBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Search() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) {navigate("/")} 
  }, []);

  return (
    <>
      <MenuBar />
      <SearchResult />
    </>
  );
}

export default Search;
