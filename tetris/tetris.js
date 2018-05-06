import * as util from './util';


var dx;               // pixel size of a single tetris block
var dy;               // pixel size of a single tetris block
var blocks;           // two dimensional array (nx*ny) representing tetris court
var actions;          // queue of user actions (inputs)
var playing;          // true|false - game is in progress
var totalTime;        // time since starting this game
var currPiece;        // the current piece
var nextPiece;        // the next piece
var rows;             // number of completed rows in the current game
var step;             // how long before current piece drops by 1 row
var pieces = [];

function onKeydown(e) {
  var handled = false;
  if (playing) {
    switch(e.keyCode) {
      case KEY.left:
        actions.push(DIRECTION.left);
        handled = true;
        break;
      case KEY.right:
        actions.push(DIRECTION.right);
        handled = true;
        break;
      case KEY.up:
        actions.push(DIRECTION.up);
        handled = true;
        break;
      case KEY.down:
        actions.push(DIRECTION.down);
        handled = true;
        break;
      case KEY.esc:
        lose();
        handled = true;
        break;
    }
  } else if (e.keyCode === KEY.space) {
    playing = true;
    handled = true;
  }

  if (handled) {
    e.prentDefault();
  }
}

function move(piece, direction) {
  var futureX = piece.x;
  var futureY = piece.y;

  switch(direction) {
    case DIRECTION.right:
      futureX++;
      break;
    case DIRECTION.left:
      futureX--;
      break;
    case DIRECTION.down:
      futureY++;
      break;
  }

  if (util.unoccupied(piece.type, futureX, futureY, piece.direction)) {
    piece.x = futureX;
    piece.y = futureY;
    invalidate();
    return true;
  } else {
    return false;
  }
}

function rotate(piece) {
  var newDirection = (++piece.direction) % 4;

  if (util.unoccupied(piece.type, piece.x, piece.y, newDirection)) {
    piece.direction = newDirection;
    invalidate();
  }
}

function drop() {
  if (!move(DIRECTION.down)) {
    dropPiece();
    removeLines();
    setCurrPiece(nextPiece);
    setNextPiece(util.randomPiece());
    clearActions();
    if (util.occupied(piece.type, piece.x, piece.y, piece.direction)) {
      playing = false;
    }
  }

  function dropPiece() {
    util.eachblock(currPiece.type,
        currPiece.x, currPiece.y, currPiece.direction, function(x, y) {
      setBlock(x, y, currPiece.type);
    });
  }

  function removeLines() {
  }
}

function handleUserInput(action) {
  switch(action) {
    case DIRECTION.left:
      move(currPiece, DIRECTION.left);
      break;
    case DIRECTION.up:
      rotate(currPiece);
      break;
    case DIRECTION.right:
      move(currPiece, DIRECTION.right);
      break;
    case DIRECTION.down:
      drop();
      break;
  }
}

function updateGame(timeDelta) {
  if (playing) {
    handleUserInput(actions.shift());
    totalTime = totalTime + timeDelta;

    if (totalTime > step) {
      totalTime = totalTime - step;
      drop();
    }
  }
}

function resetGame() {
  totalTime = 0;
  clearActions();
  clearBlocks();
  clearRows();
  clearScore();
  setCurrentPiece(next);
  setNextPiece();
}

// start the game
(function() {
  var last = util.getTimestamp();
  var now = last;

  function frame() {
    now = util.getTimestamp();
    // Math.min handles large time deltas caused when tab is not active
    updateGame(Math.min(1, (now - last) / 1000));
    draw();
    last = now;
    requestAnimationFrame(frame, canvas);
  }

  document.addEventListener('keydown', onKeydown, false);

  resetGame();
  frame(); // draw first frame
})();
