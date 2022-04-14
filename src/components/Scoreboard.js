import React from "react";

export default function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <span className="currentScore">Current score: {props.score} </span>
      <span className="possibleScore">
        Max possible score: {props.maxPossible}
      </span>
      <span className="maxScore">Your max score: {props.maxScore}</span>
    </div>
  );
}
