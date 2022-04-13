import React from "react";
import "./App.css";
import specs from "./data";
import Card from "./components/Card";

function App() {
  const cards = specs.map((espec) => {
    return <Card spec={espec.spec} img={espec.img} key={espec.key} />;
  });

  return <div>{cards}</div>;
}

export default App;
