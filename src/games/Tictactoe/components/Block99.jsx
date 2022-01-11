import PropTypes from "prop-types";
import React from "react";
import Block33 from "./Block33";

Block99.propTypes = {
  array: PropTypes.array,
};

Block99.defaultProps = {
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

function Block99(props) {
  const { array, handleClickProps, machinePrevMove } = props;
  const idxs = [0, 3, 6];

  return (
    <div className="block99">
      {idxs.map((idx, index) => {
        const eles = array.slice(idx, idx + 3).map((item, index) => {
          return (
            <div
              key={index}
              className="block99-col"
              style={{
                backgroundColor:
                  +machinePrevMove === idx + index ? "#E0FFFF" : "",
              }}
            >
              <Block33
                array={array[idx + index]}
                handleClickProps={(inIndex) =>
                  handleClickProps(inIndex, idx + index)
                }
                // machinePrevMove={machinePrevMove}
              />
            </div>
          );
        });
        return (
          <div className="block99-row" key={index}>
            {eles}
          </div>
        );
      })}
    </div>
  );
}

export default Block99;
