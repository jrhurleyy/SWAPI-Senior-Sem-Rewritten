/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./homePageCard.css";

function HPCard({ title, imageUrl }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="display image" />
      </div>
      <div className="card-title">{title}</div>
    </div>
  );
}

export default HPCard;
