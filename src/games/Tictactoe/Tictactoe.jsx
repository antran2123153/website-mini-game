import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Block99 from "./components/Block99";
import "./Tictactoe.css";

function blockWinner(arr) {
  if (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] !== 0) return arr[0];
  if (arr[3] === arr[4] && arr[4] === arr[5] && arr[5] !== 0) return arr[3];
  if (arr[6] === arr[7] && arr[7] === arr[8] && arr[8] !== 0) return arr[6];
  if (arr[0] === arr[3] && arr[3] === arr[6] && arr[6] !== 0) return arr[0];
  if (arr[1] === arr[4] && arr[4] === arr[7] && arr[7] !== 0) return arr[1];
  if (arr[2] === arr[5] && arr[5] === arr[8] && arr[8] !== 0) return arr[2];
  if (arr[0] === arr[4] && arr[4] === arr[8] && arr[8] !== 0) return arr[0];
  if (arr[2] === arr[4] && arr[4] === arr[6] && arr[6] !== 0) return arr[2];
  return 0;
}

function isFullBlock(arr) {
  for (let i = 0; i < 9; i++) {
    if (arr[i] === 0) return false;
  }
  return true;
}

let initialGameState = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function Tictactoe(props) {
  const [gameState, setGameState] = useState(initialGameState);

  const [isUserFirst, setIsUserFirst] = useState(true);
  const [machinePrevMove, setMachinePrevMove] = useState(-1);

  const machinePlay = (arr, prevMove) => {
    const winner = blockWinner(arr[prevMove]);
    let moves = [];
    if (winner !== 0) {
      for (let i = 0; i < 9; i++) {
        if (blockWinner(arr[i]) !== 0) {
          for (let j = 0; j < 9; j++) {
            if (arr[i][j] === 0) {
              moves += i;
              moves += j;
            }
          }
        }
      }
    } else {
      for (let i = 0; i < 9; i++) {
        if (arr[prevMove][i] === 0) {
          moves += prevMove;
          moves += i;
        }
      }
    }
    if (moves.length === 0) {
      for (let i = 0; i < 9; i++) {
        if (blockWinner(arr[i]) !== 0) {
          for (let j = 0; j < 9; j++) {
            if (arr[i][j] === 0) {
              moves += i;
              moves += j;
            }
          }
        }
      }
    }
    let ran = Math.floor((Math.random() * (moves.length - 1)) / 2.0);
    if (ran % 2 !== 0) ran--;
    if (ran < 0) return;
    arr[moves[ran]][moves[ran + 1]] = isUserFirst ? -1 : 1;
    setMachinePrevMove(moves[ran + 1]);
    setGameState(arr);
  };

  const handleClick = (inIndex, outIndex) => {
    var arr = gameState.map(function (temp) {
      return temp.slice();
    });

    if (machinePrevMove !== -1)
      if (outIndex !== +machinePrevMove)
        if (!isFullBlock(arr[machinePrevMove]))
          if (blockWinner(arr[machinePrevMove]) === 0) return;

    arr[outIndex][inIndex] = isUserFirst ? 1 : -1;
    setGameState(arr);
    machinePlay(arr, inIndex);
  };

  const handleNewGame = () => {
    setMachinePrevMove(-1);
    setGameState(initialGameState);
  };

  return (
    <main className="tictactoe">
      <Container className="tictactoe-inside">
        <Block99
          array={gameState}
          handleClickProps={handleClick}
          machinePrevMove={machinePrevMove}
        />
        <div className="tictactoe-menu">
          <Link to="/games">
            <Button variant="danger">Exit</Button>
          </Link>
          <Button variant="info" onClick={handleNewGame}>
            NewGame
          </Button>
        </div>
      </Container>
    </main>
  );
}

export default Tictactoe;
