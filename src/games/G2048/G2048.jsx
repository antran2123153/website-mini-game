import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import Matrix from "./components/Matrix";
import "./G2048.css";

function makeStringAuto(size, str) {
  let s = "";
  for (let i = 0; i < size; i++) s += str + " ";
  return s;
}

function randomIndex(arr, size = 4) {
  let blankBoxX = [];
  let blankBoxY = [];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (arr[i][j] === 0) {
        blankBoxX += [i];
        blankBoxY += [j];
      }
    }
  }
  let randomIdx = Math.floor(Math.random() * blankBoxX.length);
  // console.log(randomIdx);
  return [blankBoxX[randomIdx], blankBoxY[randomIdx]];
}

function arrayCompare(arr1, arr2, size = 4) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (arr1[i][j] !== arr2[i][j]) return false;
    }
  }
  return true;
}

function randomNumber(size) {
  if (size === 4) {
    return Math.random() > 0.112345 ? 2 : 4;
  } else if (size === 5) {
    return Math.random() > 0.23456 ? 2 : Math.random() > 0.23456 ? 4 : 8;
  } else {
    return Math.random() > 0.23456
      ? 2
      : Math.random() > 0.23456
      ? 4
      : Math.random() > 0.23456
      ? 8
      : 16;
  }
}

function initialArray(size = 4) {
  let array = new Array(size);
  for (let i = 0; i < size; i++) {
    array[i] = new Array(size);
    for (let j = 0; j < size; j++) {
      array[i][j] = 0;
    }
  }
  array[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)] =
    randomNumber(size);
  return array;
}

function G2048(props) {
  const [gameState, setGameState] = useState(initialArray(4));
  const [score, setScore] = useState(0);
  const [size, setSize] = useState(4);

  const handleGameOver = () => {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (gameState[i][j] === 0) return;
        if (j < size - 1 && gameState[i][j] === gameState[i][j + 1]) return;
        if (j < size - 1 && gameState[j][i] === gameState[j + 1][i]) return;
      }
    }
    console.log("GameOver !!!");
  };

  const handleLeft = new Promise(function (myResolve, myReject) {
    var arr = gameState.map(function (temp) {
      return temp.slice();
    });
    let newScore = score;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let f = j;
        while (f < size && arr[i][f] === 0) f++;
        if (f === size) break;
        let k = f + 1;
        while (k < size && arr[i][k] === 0) k++;
        if (k === size) {
          arr[i][j] = arr[i][f];
          if (f !== j) arr[i][f] = 0;
        } else if (arr[i][f] === arr[i][k]) {
          arr[i][j] = arr[i][f] * 2;
          if (f !== j) arr[i][f] = 0;
          arr[i][k] = 0;
          newScore += arr[i][j];
        } else {
          arr[i][j] = arr[i][f];
          arr[i][j + 1] = arr[i][k];
          if (f !== j && f !== j + 1) arr[i][f] = 0;
          if (k !== j && k !== j + 1) arr[i][k] = 0;
        }
      }
    }

    if (arrayCompare(gameState, arr)) {
      handleGameOver();
    } else {
      let idx = randomIndex(arr, size);
      arr[idx[0]][idx[1]] = randomNumber(size);
      myResolve({
        arr: arr,
        score: newScore,
      });
    }
  });

  const handleRight = new Promise(function (myResolve, myReject) {
    var arr = gameState.map(function (temp) {
      return temp.slice();
    });
    let newScore = score;
    for (let i = 0; i < size; i++) {
      for (let j = size - 1; j >= 0; j--) {
        let f = j;
        while (f >= 0 && arr[i][f] === 0) f--;
        if (f === -1) break;
        let k = f - 1;
        while (k >= 0 && arr[i][k] === 0) k--;
        if (k === -1) {
          arr[i][j] = arr[i][f];
          if (f !== j) arr[i][f] = 0;
        } else if (arr[i][f] === arr[i][k]) {
          arr[i][j] = arr[i][f] * 2;
          if (f !== j) arr[i][f] = 0;
          arr[i][k] = 0;
          newScore += arr[i][j];
        } else {
          arr[i][j] = arr[i][f];
          arr[i][j - 1] = arr[i][k];
          if (f !== j && f !== j - 1) arr[i][f] = 0;
          if (k !== j && k !== j - 1) arr[i][k] = 0;
        }
      }
    }
    if (arrayCompare(gameState, arr)) {
      handleGameOver();
    } else {
      let idx = randomIndex(arr, size);
      arr[idx[0]][idx[1]] = randomNumber(size);
      myResolve({
        arr: arr,
        score: newScore,
      });
    }
  });

  const handleUp = new Promise(function (myResolve, myReject) {
    var arr = gameState.map(function (temp) {
      return temp.slice();
    });
    let newScore = score;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size - 1; j++) {
        let f = j;
        while (f < size && arr[f][i] === 0) f++;
        if (f === size) break;
        let k = f + 1;
        while (k < size && arr[k][i] === 0) k++;
        if (k === size) {
          arr[j][i] = arr[f][i];
          if (f !== j) arr[f][i] = 0;
        } else if (arr[f][i] === arr[k][i]) {
          arr[j][i] = arr[f][i] * 2;
          if (f !== j) arr[f][i] = 0;
          arr[k][i] = 0;
          newScore += arr[j][i];
        } else {
          arr[j][i] = arr[f][i];
          arr[j + 1][i] = arr[k][i];
          if (f !== j && f !== j + 1) arr[f][i] = 0;
          if (k !== j && k !== j + 1) arr[k][i] = 0;
        }
      }
    }
    if (arrayCompare(gameState, arr)) {
      handleGameOver();
    } else {
      let idx = randomIndex(arr, size);
      arr[idx[0]][idx[1]] = randomNumber(size);
      myResolve({
        arr: arr,
        score: newScore,
      });
    }
  });

  const handleDown = new Promise(function (myResolve, myReject) {
    var arr = gameState.map(function (temp) {
      return temp.slice();
    });
    let newScore = score;
    for (let i = 0; i < size; i++) {
      for (let j = size - 1; j >= 0; j--) {
        let f = j;
        while (f >= 0 && arr[f][i] === 0) f--;
        if (f === -1) break;
        let k = f - 1;
        while (k >= 0 && arr[k][i] === 0) k--;
        if (k === -1) {
          arr[j][i] = arr[f][i];
          if (f !== j) arr[f][i] = 0;
        } else if (arr[f][i] === arr[k][i]) {
          arr[j][i] = arr[f][i] * 2;
          if (f !== j) arr[f][i] = 0;
          arr[k][i] = 0;
          newScore += arr[j][i];
        } else {
          arr[j][i] = arr[f][i];
          arr[j - 1][i] = arr[k][i];
          if (f !== j && f !== j - 1) arr[f][i] = 0;
          if (k !== j && k !== j - 1) arr[k][i] = 0;
        }
      }
    }
    if (arrayCompare(gameState, arr)) {
      handleGameOver();
    } else {
      let idx = randomIndex(arr, size);
      arr[idx[0]][idx[1]] = randomNumber(size);
      myResolve({
        arr: arr,
        score: newScore,
      });
    }
  });

  const handleSwipe = useSwipeable({
    onSwipedLeft: () => {
      handleLeft.then((res) => {
        setGameState(res.arr);
        setScore(res.score);
      });
    },
    onSwipedRight: () => {
      handleRight.then((res) => {
        setGameState(res.arr);
        setScore(res.score);
      });
    },
    onSwipedUp: () => {
      handleUp.then((res) => {
        setGameState(res.arr);
        setScore(res.score);
      });
    },
    onSwipedDown: () => {
      handleDown.then((res) => {
        setGameState(res.arr);
        setScore(res.score);
      });
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleKeyDown = (e) => {
    if (e.key === "w" || e.key === "ArrowUp") {
      handleUp.then((res) => {
        setGameState(res.arr);
        setScore(res.score);
      });
    } else if (e.key === "s" || e.key === "ArrowDown") {
      handleDown.then((res) => {
        setGameState(res.arr);
        setScore(res.score);
      });
    } else if (e.key === "a" || e.key === "ArrowLeft") {
      handleLeft.then((res) => {
        setGameState(res.arr);
        setScore(res.score);
      });
    } else if (e.key === "d" || e.key === "ArrowRight") {
      handleRight.then((res) => {
        setGameState(res.arr);
        setScore(res.score);
      });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, [gameState]);

  const handleChangeSize = (newsize) => {
    if (4 <= newsize && newsize <= 5) {
      setSize(newsize);
      setScore(0);
      setGameState(initialArray(newsize));
    }
  };

  const handleNewGame = () => {
    setScore(0);
    setGameState(initialArray(size));
  };

  return (
    <div {...handleSwipe} className="game2048">
      <Container className="game2048-inside">
        <div
          className="grid-container"
          style={{
            gridTemplateColumns: makeStringAuto(size, "auto"),
          }}
        >
          <Matrix array={gameState} />
        </div>
        <div className="game2048-menu">
          <h2>Score: {score}</h2>
          <Button variant="primary" onClick={handleNewGame}>
            New game
          </Button>{" "}
          <Button variant="warning" onClick={() => handleChangeSize(size + 1)}>
            Up size
          </Button>{" "}
          <Button variant="info" onClick={() => handleChangeSize(size - 1)}>
            Down size
          </Button>{" "}
          <Link to="/games">
            <Button variant="danger">Exit</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default G2048;
