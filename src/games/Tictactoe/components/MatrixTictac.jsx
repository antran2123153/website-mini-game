import React from "react";
import PropTypes from "prop-types";

MatrixTictac.propTypes = {
  array: PropTypes.array,
};

MatrixTictac.defaultProps = {
  array: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
};

function MatrixTictac(props) {
  const { array, handleClickCell, prevMove } = props;

  const handleSelect = (outIndex, inIndex) => {
    if (prevMove === -1) {
      handleClickCell(outIndex, inIndex);
    }
    if (prevMove !== outIndex) {
      for (let i = 0; i < 9; i++) {
        if (array[prevMove][i] !== 0) {
          return;
        }
      }
    }

    if (array[outIndex][inIndex] === 0) handleClickCell(outIndex, inIndex);
  };

  const row1 = array.slice(0, 3).map((item, index) => {
    return (
      <div className="mini-matrix" key={index}>
        <div className="row">
          <div className="cell" onClick={() => handleSelect(index, 0)}>
            {item[0] === 1 ? "X" : item[0] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(index, 1)}>
            {item[1] === 1 ? "X" : item[1] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(index, 2)}>
            {item[2] === 1 ? "X" : item[2] === -1 ? "O" : ""}
          </div>
        </div>
        <div className="row">
          <div className="cell" onClick={() => handleSelect(index, 3)}>
            {item[3] === 1 ? "X" : item[3] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(index, 4)}>
            {item[4] === 1 ? "X" : item[4] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(index, 5)}>
            {item[5] === 1 ? "X" : item[5] === -1 ? "O" : ""}
          </div>
        </div>
        <div className="row">
          <div className="cell" onClick={() => handleSelect(index, 6)}>
            {item[6] === 1 ? "X" : item[6] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(index, 7)}>
            {item[7] === 1 ? "X" : item[7] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(index, 8)}>
            {item[8] === 1 ? "X" : item[8] === -1 ? "O" : ""}
          </div>
        </div>
      </div>
    );
  });
  const row2 = array.slice(3, 6).map((item, index) => {
    return (
      <div className="mini-matrix" key={index}>
        <div className="row">
          <div className="cell" onClick={() => handleSelect(3 + index, 0)}>
            {item[0] === 1 ? "X" : item[0] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(3 + index, 1)}>
            {item[1] === 1 ? "X" : item[1] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(3 + index, 2)}>
            {item[2] === 1 ? "X" : item[2] === -1 ? "O" : ""}
          </div>
        </div>
        <div className="row">
          <div className="cell" onClick={() => handleSelect(3 + index, 3)}>
            {item[3] === 1 ? "X" : item[3] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(3 + index, 4)}>
            {item[4] === 1 ? "X" : item[4] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(3 + index, 5)}>
            {item[5] === 1 ? "X" : item[5] === -1 ? "O" : ""}
          </div>
        </div>
        <div className="row">
          <div className="cell" onClick={() => handleSelect(3 + index, 6)}>
            {item[6] === 1 ? "X" : item[6] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(3 + index, 7)}>
            {item[7] === 1 ? "X" : item[7] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(3 + index, 8)}>
            {item[8] === 1 ? "X" : item[8] === -1 ? "O" : ""}
          </div>
        </div>
      </div>
    );
  });
  const row3 = array.slice(6, 9).map((item, index) => {
    return (
      <div className="mini-matrix" key={index}>
        <div className="row">
          <div className="cell" onClick={() => handleSelect(6 + index, 0)}>
            {item[0] === 1 ? "X" : item[0] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(6 + index, 1)}>
            {item[1] === 1 ? "X" : item[1] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(6 + index, 2)}>
            {item[2] === 1 ? "X" : item[2] === -1 ? "O" : ""}
          </div>
        </div>
        <div className="row">
          <div className="cell" onClick={() => handleSelect(6 + index, 3)}>
            {item[3] === 1 ? "X" : item[3] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(6 + index, 4)}>
            {item[4] === 1 ? "X" : item[4] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(6 + index, 5)}>
            {item[5] === 1 ? "X" : item[5] === -1 ? "O" : ""}
          </div>
        </div>
        <div className="row">
          <div className="cell" onClick={() => handleSelect(6 + index, 6)}>
            {item[6] === 1 ? "X" : item[6] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(6 + index, 7)}>
            {item[7] === 1 ? "X" : item[7] === -1 ? "O" : ""}
          </div>
          <div className="cell" onClick={() => handleSelect(6 + index, 8)}>
            {item[8] === 1 ? "X" : item[8] === -1 ? "O" : ""}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="matrix">
      <div className="matrix-row">{row1}</div>
      <div className="matrix-row">{row2}</div>
      <div className="matrix-row">{row3}</div>
    </div>
  );
}

export default MatrixTictac;
