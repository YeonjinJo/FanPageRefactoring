import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { StItems, StItem } from "../styles/MyStyles";
import Jobs from "./Jobs";

function SearchResult() {
  const searchOption = parseInt(useLocation().state.option);
  const searchKeyword = useLocation().state.keyword;
  const boardItems = useSelector((state) => state.boardItemsReducer.boardItems);

  if (searchKeyword) {
    switch (searchOption) {
      case 1:
        return (
          <StItems>
            {boardItems
              .filter((element) =>
                element.title
                  .replace(" ", "")
                  .toUpperCase()
                  .includes(searchKeyword.replace(" ", "").toUpperCase())
              )
              .map((element) => {
                return (
                  <StItem id={element.id} key={element.id}>
                    <h3 id={element.id}>{element.title}</h3>
                    <p id={element.id}>
                      to.{" "}
                      {Jobs().jobList[parseInt(element.receiver.substr(-1))]}
                    </p>
                    <p id={element.id}>from. {element.addresser}</p>
                    <p id={element.id}>{element.timeString}</p>
                  </StItem>
                );
              })}
          </StItems>
        );
      case 2:
        return (
          <StItems>
            {boardItems
              .filter((element) => searchKeyword === element.addresser)
              .map((element) => {
                return (
                  <StItem id={element.id} key={element.id}>
                    <h3 id={element.id}>{element.title}</h3>
                    <p id={element.id}>
                      to.{" "}
                      {Jobs().jobList[parseInt(element.receiver.substr(-1))]}
                    </p>
                    <p id={element.id}>from. {element.addresser}</p>
                    <p id={element.id}>{element.timeString}</p>
                  </StItem>
                );
              })}
          </StItems>
        );
      case 3:
        return (
          <StItems>
            {boardItems
              .filter((element) =>
                element.content
                  .trim()
                  .toUpperCase()
                  .includes(searchKeyword.trim().toUpperCase())
              )
              .map((element) => {
                return (
                  <StItem id={element.id} key={element.id}>
                    <h3 id={element.id}>{element.title}</h3>
                    <p id={element.id}>
                      to.{" "}
                      {Jobs().jobList[parseInt(element.receiver.substr(-1))]}
                    </p>
                    <p id={element.id}>from. {element.addresser}</p>
                    <p id={element.id}>{element.timeString}</p>
                  </StItem>
                );
              })}
          </StItems>
        );
      default:
        return (
          <StItems>
            <p></p>
            <h3>No Result</h3>
          </StItems>
        );
    }
  }
  return (
    <StItems>
      <p></p>
      <h3>No Result</h3>
    </StItems>
  );
}

export default SearchResult;
