import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import "../Styles/Infobar.css";

export const Infobar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <PersonIcon />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <CloseIcon />
        </a>
      </div>
    </div>
  );
};
