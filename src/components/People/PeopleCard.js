/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./PeopleCard.css";

function PeopleCard({ cardData, title, imageUrl }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="display image" />
      </div>
      <div className="card-title">{title}</div>
      {/* {showDeleteButton && <div className='button-holder'><delete-button onClick={deleteHandler} >
                    X</delete-button></div>}
                {showAddFavoritesButton && <div className='button-holder'><favorite-button onClick={addFaveHandler} >
                    ★</favorite-button></div>} */}
      <div className="people-card-body">
        ★ Height: {cardData.height}
        <br></br>★ Mass: {cardData.mass}
        <br></br>★ Hair Color: {cardData.hair_color}
        <br></br>★ Skin Color: {cardData.skin_color}
        <br></br>★ Eye Color: {cardData.eye_color}
        <br></br>★ Birth Year: {cardData.birth_year}
        <br></br>★ Gender: {cardData.gender}
      </div>
    </div>
  );
}

export default PeopleCard;
