import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { StItems, StItem } from "../styles/MyStyles";

const BoardList = () => {
  const boardItems = useSelector((state) => state.boardItems.boardItems);
  const currentLocation = useLocation().pathname;
  const navigate = useNavigate();

  const detailViewer = (event) =>
    navigate("/detail", {
      state: { id: event.target.id, list: currentLocation },
    });

  return (
    <StItems>
      {boardItems
        .filter((element) => currentLocation === element.receiver)
        .map((element) => {
          return (
            <StItem id={element.id} key={element.id} onClick={detailViewer}>
              <h3 id={element.id}>{element.title}</h3>
              <p id={element.id}>from. {element.addresser}</p>
              <p id={element.id}>{element.timeString}</p>
            </StItem>
          );
        })}
    </StItems>
  );
};

export default BoardList;


