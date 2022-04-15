import React from "react";
import "./Scoreboard.css";

// Simple score tracking, passing the state through props - no need for more complexity here.

export default function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <div className="scoreWrapper">
        <span className="currentScore">Current score: {props.score} </span>
        <span className="possibleScore">
          Max possible score: {props.maxPossible}
        </span>
        <span className="maxScore">Your max score: {props.maxScore}</span>
      </div>
    </div>
  );
}
