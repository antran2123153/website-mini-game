import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IMAGES } from "../../untils/const";
import "./GameHome.css";

GameHome.propTypes = {};

function GameHome(props) {
  return (
    <main className="gamehome">
      <Container className="gamehome-inside">
        <div className="game-item">
          <Link to="/games/2048">
            <img src={IMAGES.game2048} alt="" className="game-item-img" />
          </Link>
        </div>
        <div className="game-item">
          <Link to="/games/tictactoe">
            <img src={IMAGES.gameTictactoe} alt="" className="game-item-img" />
          </Link>
        </div>
        <div className="game-item">
          <Link to="/games/sokoban">
            <img src={IMAGES.gameSokoban} alt="" className="game-item-img" />
          </Link>
        </div>
      </Container>
    </main>
  );
}

export default GameHome;
