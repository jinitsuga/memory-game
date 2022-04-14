import React from "react";
import "./App.css";
import specs from "./data";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";

function App() {
  // The two states, playerChoices and Score that will run the app.
  const [playerChoices, setPlayerChoices] = React.useState([]);

  const [score, setScore] = React.useState({
    currentScore: playerChoices.length,
    maxScore: 0,
  });
  // State handling functions
  function handleScore() {
    if (score.currentScore > score.maxScore) {
      setScore((oldScore) => {
        return {
          currentScore: playerChoices.length,
          maxScore: oldScore.currentScore,
        };
      });
    } else {
      setScore((oldSCore) => {
        return { ...oldSCore, currentScore: playerChoices.length };
      });
    }
  }

  function handleChoice(spec) {
    console.log(playerChoices);
    if (playerChoices.find((element) => element === spec)) {
      setPlayerChoices([]);
    } else {
      setPlayerChoices((oldChoices) => {
        return [...oldChoices, spec];
      });
    }
  }

  //Shuffling function for the list of specs

  function shuffle(arr) {
    let i = arr.length;
    if (i === 0) return false;
    while (i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let tempi = arr[i];
      let tempj = arr[j];
      arr[i] = tempj;
      arr[j] = tempi;
    }
  }
  // Shuffling the specs array (or whatever you choose the game to be about) before rendering them into cards.
  shuffle(specs);

  const cards = specs.map((espec) => {
    return (
      <Card
        spec={espec.spec}
        img={espec.img}
        key={espec.key}
        handleChoice={handleChoice}
        handleScore={handleScore}
      />
    );
  });

  return (
    <div className="appWrapper">
      <Scoreboard
        score={score.currentScore}
        maxScore={score.maxScore}
        maxPossible={specs.length}
      />
      <div className="cardsContainer">{cards}</div>
    </div>
  );
}

export default App;
