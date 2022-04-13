import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="cardWrap">
      <h2>{props.spec}</h2>
      <img className="specImg" src={props.img}></img>
    </div>
  );
}
