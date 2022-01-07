import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { G2048, Sokoban, Tictactoe } from "./games";
import { Home, GameHome } from "./pages";
import { Bar } from "./components/Bar";
import "./app.css";

function App(props) {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Bar />
        <Routes>
          <Route exact path="/games/2048" element={<G2048 />} />
          <Route exact path="/games/tictactoe" element={<Tictactoe />} />
          <Route exact path="/games/sokoban" element={<Sokoban />} />
          <Route exact path="/games" element={<GameHome />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
