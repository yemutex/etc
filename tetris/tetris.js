import { getTimestamp } from './util';


var dx;           // pixel size of a single tetris block
var dy;           // pixel size of a single tetris block
var blocks;       // two dimensional array (nx*ny) representing tetris court
var actions;      // queue of user actions (inputs)
var playing;      // true|false - game is in progress
var dt;           // time since starting this game
var current;      // the current piece
var next;         // the next piece
var score;        // the current score
var rows;         // number of completed rows in the current game
var step;         // how long before current piece drops by 1 row
var pieces = [];

function handleUserInput(action) {
}

function drop() {
}

function update(idt) {
  if (playing) {
    handleUserInput(actions.shift());
    dt = dt + idt;

    if (dt > step) {
      dt = dt - step;
      drop();
    }
  }
}

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
    play();
    handled = true;
  }

  if (handled) {
    e.prentDefault();
  }
}

function reset() {
  dt = 0;
  clearActions();
  clearBlocks();
  clearRows();
  clearScore();
  setCurrentPiece(next);
  setNextPiece();
}

// start the game
(function() {
  var last = getTimestamp();
  var now = last;

  function frame() {
    now = getTimestamp();
    // getting the min handles large time deltas caused when tab is not active
    update(Math.min(1, (now - last) / 1000));
    draw();
    last = now;
    requestAnimationFrame(frame, canvas);
  }

  document.addEventListener('keydown', onKeydown, false);

  reset();
  frame(); // draw first frame
})();
