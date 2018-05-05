export function eachblock(type, x, y, direction, fn) {
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

export function occupied(type, x, y, direction) {
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

export function unoccupied(type, x, y, direction) {
  return !occupied(type, x, y, direction);
}

export function randomPiece() {
  if (pieces.length === 0) {
    pieces = [
      i, i, i, i, j, j, j, j, l, l, l, l, o, o, o, o,
      s, s, s, s, t, t, t, t, z, z, z, z
    ];
  }

  // remove a single piece
  var type = pieces.splice(Math.random(0, pieces.length-1), 1)[0];
  return { type: type, direction: DIRECTION.up, x: 2, y: 0 };
}

export function getTimestamp() {
  return new Date().getTime();
}
