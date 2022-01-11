import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { GAME_INIT } from "./init";
import "./Sokoban.css";

Sokoban.propTypes = {};

let initialState = [];

function Sokoban(props) {
  const [gameState, setGameState] = useState(initialState);

  const init = GAME_INIT[0].split("\n");
  console.log(init);

  return (
    <div className="sokoban">
      <Container className="sokoban-inside">{init}</Container>
    </div>
  );
}

export default Sokoban;
