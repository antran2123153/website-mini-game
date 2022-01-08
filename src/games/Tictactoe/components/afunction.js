const MAX_DEPTH = 4;

export function isWinBlock(block) {
  let pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [1, 4, 8],
    [2, 4, 6],
  ];
  for (let i in pattern)
    if (((block[i[0]] === block[i[1]]) === block[i[2]]) !== 0) return true;

  return false;
}

function isFullBlock(array) {
  for (let i = 0; i < 9; i++) if (array[i] === 0) return false;
  return true;
}

export function selectMoves(gameState, prevMove) {
  let moves = [];
  console.log(prevMove);
  if (prevMove === -1)
    return [
      0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 1, 0, 1, 1, 1, 2, 1, 3, 1,
      4, 1, 5, 1, 6, 1, 7, 2, 0, 2, 1, 2, 2, 2, 3, 2, 4, 2, 5, 2, 6, 2, 7, 3, 0,
      3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 3, 7, 4, 0, 4, 1, 4, 2, 4, 3, 4, 4, 4,
      5, 4, 6, 4, 7, 5, 0, 5, 1, 5, 2, 5, 3, 5, 4, 5, 5, 5, 6, 5, 7, 6, 0, 6, 1,
      6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7, 7, 0, 7, 1, 7, 2, 7, 3, 7, 4, 7, 5, 7,
      6, 7, 7,
    ];
  if (isWinBlock(gameState[prevMove]) || isFullBlock(gameState[prevMove])) {
    for (let i = 0; i < 9; i++) {
      if (isWinBlock[gameState[i]] || isFullBlock(gameState[prevMove]))
        continue;
      for (let j = 0; j < 9; j++)
        if (gameState[i][j] === 0) {
          moves += [i];
          moves += [j];
        }
    }
  } else {
    for (let i = 0; i < 9; i++)
      if (gameState[prevMove][i] === 0) {
        moves += [prevMove];
        moves += [i];
      }
  }
  //   console.log(moves);
  return moves;
}

function actMove(gameState, move, player) {
  gameState[move[0]][move[1]] = player;
}

function heurictic(gameState, player) {}

function minimax(
  depth,
  gameState,
  moves,
  isMaximizingPlayer,
  alpha,
  beta,
  player
) {
  if (moves.length === 0 || depth === MAX_DEPTH)
    return heurictic(gameState, player);
  let best = 0;
  if (isMaximizingPlayer) {
    best = -99999;
    for (let move in moves) {
      let newState = gameState.map(function (temp) {
        return temp.slice();
      });
      actMove(newState, move, player);
      let newMoves = selectMoves(newState, move);
      let val = minimax(
        depth + 1,
        newState,
        newMoves,
        !isMaximizingPlayer,
        alpha,
        beta,
        player
      );
      best = Math.max(best, val);
      alpha = Math.max(alpha, best);
      if (beta <= alpha) break;
      return best;
    }
  } else {
    best = 99999;
    for (let move in moves) {
      let newState = gameState.map(function (temp) {
        return temp.slice();
      });
      newState.actMove(move);
      let newMoves = selectMoves(newState, move);
      let val = minimax(
        depth + 1,
        newState,
        newMoves,
        !isMaximizingPlayer,
        alpha,
        beta,
        player
      );
      best = Math.min(best, val);
      alpha = Math.min(alpha, best);
      if (beta <= alpha) break;
      return best;
    }
  }
}

export const machinePlay = (gameState, prevMove) => {
  let moves = selectMoves(gameState, prevMove);

  return moves[Math.floor(Math.random() * moves.length)];
};
