import React from "react";
import PropTypes from "prop-types";
import { COLORS } from "../../../untils/const";

Matrix.propTypes = {
  array: PropTypes.array,
};

Matrix.defaultProps = {
  array: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

function Matrix(props) {
  const { array } = props;

  const view = array.map((row) => {
    const cols = row.map((col, index) => {
      if (col === 0)
        return (
          <div
            key={index}
            className="grid-item-hidden"
            style={{ backgroundColor: COLORS[0] }}
          ></div>
        );
      else
        return (
          <div
            key={index}
            className="grid-item"
            style={{ backgroundColor: COLORS[Math.log(col) / Math.log(2)] }}
          >
            {col}
          </div>
        );
    });
    return cols;
  });
  return view;
}

export default Matrix;
