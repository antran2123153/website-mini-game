import PropTypes from "prop-types";
import React from "react";

Block33.propTypes = {
  array: PropTypes.array,
};

Block33.defaultProps = {
  array: [0, 0, 0, 0, 0, 0, 0, 0, 0],
};

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

function Block33(props) {
  const { array, handleClickProps } = props;

  const winBlock = blockWinner(array);
  if (winBlock !== 0) {
    return (
      <div className="block33">
        <div
          className="block33-win"
          style={{ color: winBlock === 1 ? "red" : "blue" }}
        >
          {winBlock === 1 ? "X" : "O"}
        </div>
      </div>
    );
  }

  const idxs = [0, 3, 6];

  return (
    <div className="block33">
      {idxs.map((idx, index) => {
        const eles = array.slice(idx, idx + 3).map((item, index) => {
          return (
            <div
              key={index}
              className="block33-col"
              onClick={() => {
                if (item !== 0) return;
                handleClickProps(idx + index);
              }}
              style={{
                color: item === 1 ? "red" : "blue",
              }}
            >
              {item === 0 ? "" : item === 1 ? "X" : "O"}
            </div>
          );
        });
        return (
          <div className="block33-row" key={index}>
            {eles}
          </div>
        );
      })}
    </div>
  );
}

export default Block33;
