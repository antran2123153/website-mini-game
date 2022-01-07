import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { machinePlay } from "./components/afunction";
import MatrixTictac from "./components/MatrixTictac";
import "./Tictactoe.css";

Tictactoe.propTypes = {};

function Tictactoe(props) {
  const [gameState, setGameState] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [isPlayerStep, setIsPlayerStep] = useState(true);
  const [prevMove, setPrevMove] = useState(-1);

  const handleClickCell = async (outIndex, inIndex) => {
    var arr = gameState.map(function (temp) {
      return temp.slice();
    });
    arr[outIndex][inIndex] = isPlayerStep ? 1 : -1;
    setIsPlayerStep(!isPlayerStep);
    setGameState(arr);

    const nextStep = await machinePlay(gameState, inIndex);
  };

  return (
    <main className="tictactoe">
      <Container className="tictactoe-inside">
        <MatrixTictac
          array={gameState}
          handleClickCell={handleClickCell}
          prevMove={prevMove}
        />
      </Container>
    </main>
  );
}

export default Tictactoe;
