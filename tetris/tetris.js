const KEY = {
  ESC:    27,
  SPACE:  32,
  LEFT:   37,
  UP:     38,
  RIGHT:  39,
  DOWN:   40
};

const DIR = {
  UP:     0,
  RIGHT:  1,
  DOWN:   2,
  LEFT:   3,
  MIN:    0,
  MAX:    3
};

const i = {
  blocks: [0x0F00, 0x2222, 0x00F0, 0x4444],
  color: 'cyan'
};

const j = {
  blocks: [0x44C0, 0x8E00, 0x6440, 0x0E20],
  color: 'blue'
};

const l = {
  blocks: [0x4460, 0x0E80, 0xC440, 0x2E00],
  color: 'orange'
};

const o = {
  blocks: [0xCC00, 0xCC00, 0xCC00, 0xCC00],
  color: 'yellow'
};

const s = {
  blocks: [0x06C0, 0x8C40, 0x6C00, 0x4620],
  color: 'green'
};

const t = {
  blocks: [0x0E40, 0x4C40, 0x4E00, 0x4640],
  color: 'purple'
};

const z = {
  blocks: [0x0C60, 0x4C80, 0xC600, 0x2640],
  color: 'red'
};

const stats = new Stats();
const canvas = get('canvas');
const ctx = canvas.getContext('2d');
const ucanvas = get('upcoming');
const uctx = ucanvas.getContext('2d');
const speed = { start: 0.6, decrement: 0.005, min: 0.1 };
const nx = 10; // width of tetris court (in blocks)
const ny = 20; // height of tetris court (in blocks)
const nu = 5;  // width/height of upcoming preview (in blocks)

function eachblock(type, x, y, direction, fn) {
  var row = 0;
  var col = 0;
  var blocks = type.blocks[direction];

  for (var bit = 0x8000; bit > 0; bit = bit >> 1) {
    if (blocks & bit) {
      fn(x + col, y + row);
    }

    if (++col === 4) {
      col = 0;
      ++row;
    }
  }
}

function occupied(type, x, y, direction) {
  var result = false;

  // getBlock() indicates if that position on the tetris grid is occupied
  eachblock(type, x, y, direction, function(x, y) {
    if ((x < 0) || (x >= nx) ||
        (y < 0) || (y >= ny) || (getBlock(x, y))) {
      result = true;
    }
  });

  return result;
}

function unoccupied(type, x, y, direction) {
  return !occupied(type, x, y, direction);
}

var pieces = [];

function randomPiece() {
  if (pieces.length === 0) {
    pieces = [
      i, i, i, i, j, j, j, j, l, l, l, l, o, o, o, o,
      s, s, s, s, t, t, t, t, z, z, z, z
    ];
  }

  // remove a single piece
  var type = pieces.splice(Math.random(0, pieces.length-1), 1)[0];
  return { type: type, direction: DIRECTION.UP, x: 2, y: 0 };
}
