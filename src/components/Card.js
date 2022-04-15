import React from "react";
import "./Card.css";

// As generic as I could make the cards, in case I (or anyone else decides to change the game's main topic).
export default function Card(props) {
  return (
    <div
      className="cardWrap"
      onClick={() => {
        props.handleCard(props.spec);
      }}
    >
      <h2>{props.spec}</h2>
      <img
        className="specImg"
        src={props.img}
        alt={props.spec + " spec icon"}
      ></img>
    </div>
  );
}
