
import React, { Component } from "react";
import "./homePageCard.css";

function HPCard({
  title,
  imageUrl,
  cardData /*, children */,
  // index,
  // deleteSelectedFavorite,
  // showDeleteButton,
  // showAddFavoritesButton,
}) {
  // Children *Alternative Method

  // const deleteHandler = () => {
  //   const cardURL = cardData.url;
  //   const ID = cardURL.split("/")[5];

  //   var requestOptions = {
  //     method: "DELETE",
  //     redirect: "follow",
  //   };

  //   fetch(`http://localhost:3000/delete/${ID}`, requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => {
  //       console.log(result);
  //       deleteSelectedFavorite(index);
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  // const addFaveHandler = () => {
  //   const cardURL = cardData.url;
  //   const ID = cardURL.split("/")[5];

  //   var requestOptions = {
  //     method: "POST",
  //     redirect: "follow",
  //   };

  //   fetch(`http://localhost:9000/savefaves/${ID}`, requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // };

  return (
    <div className="card-container" >
      {/* {showDeleteButton && (
        <div className="button-holder">
          <delete-button onClick={deleteHandler}>X</delete-button>
        </div>
      )}
      {showAddFavoritesButton && (
        <div className="button-holder">
          <favorite-button onClick={addFaveHandler}>★</favorite-button>
        </div>
      )} */}
      <div className="image-container">
        <img src={imageUrl} alt="display image" />
      </div>
      <div className="card-title">{title}</div>
      {/* <div className="card-body">{cardData}</div> */}
    </div>
  );
}

export default HPCard;
