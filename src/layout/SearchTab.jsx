import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  StFooter,
  SearchButton,
  SearchInput,
  SearchSelect,
} from "../styles/MyStyles";

const SearchTab = () => {
  const [option, setOption] = useState(1);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const enterKey = (event) => {
    if (event.keyCode === 13) {
      searchHandler();
    }
  };

  const searchHandler = () => {
    navigate("/search", { state: { option: option, keyword: keyword } });
  };

  return (
    <StFooter>
      <label>Search</label>
      <SearchSelect
        value={option}
        onChange={(event) => setOption(event.target.value)}
      >
        <option value={1}>Title</option>
        <option value={2}>Addresser</option>
        <option value={3}>Content</option>
      </SearchSelect>
      <SearchInput
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        onKeyUp={enterKey}
      ></SearchInput>
      <SearchButton onClick={searchHandler}>Search</SearchButton>
    </StFooter>
  );
};

export default SearchTab;
