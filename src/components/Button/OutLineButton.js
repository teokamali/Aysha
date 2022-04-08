import React from "react";
import "./OutLineButton.scss";
function OutLineButton({ text, link }) {
  return (
    <div className="outline-button-wrapper">
      <a className="btn outline-button" href={link}>
        {text}
      </a>
    </div>
  );
}

export default OutLineButton;
