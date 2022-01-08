import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { selectMoves } from "./components/afunction";
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
  const [prevMove, setPrevMove] = useState(-1);

  const handleClickCell = (outIndex, inIndex) => {
    var arr = gameState.map(function (temp) {
      return temp.slice();
    });
    arr[outIndex][inIndex] = 1;
    // setGameState(arr);
    let moves = selectMoves(arr, inIndex);
    console.log(moves);
    let idx = Math.floor(Math.random() * (moves.length - 1));
    if (idx % 2 !== 0) idx--;
    arr[moves[idx]][moves[idx + 1]] = -1;
    setGameState(arr);
    setPrevMove(moves[idx + 1]);
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
