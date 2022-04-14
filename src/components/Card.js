import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div
      className="cardWrap"
      onClick={() => {
        props.handleChoice(props.spec);
        props.handleScore();
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
