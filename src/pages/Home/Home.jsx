import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IMAGES } from "../../untils/const";
import "./Home.css";

Home.propTypes = {};

function Home(props) {
  return (
    <main className="home">
      <Container className="home-inside">
        <div className="component">
          <Link to="/games">
            <img src={IMAGES.gameHome} alt="" className="component-img" />
          </Link>
        </div>
      </Container>
    </main>
  );
}

export default Home;
