var i = {
  blocks: [0x0F00, 0x2222, 0x00F0, 0x4444],
  color: 'cyan'
};

var j = {
  blocks: [0x44C0, 0x8E00, 0x6440, 0x0E20],
  color: 'blue'
};

var l = {
  blocks: [0x4460, 0x0E80, 0xC440, 0x2E00],
  color: 'orange'
};

var o = {
  blocks: [0xCC00, 0xCC00, 0xCC00, 0xCC00],
  color: 'yellow'
};

var s = {
  blocks: [0x06C0, 0x8C40, 0x6C00, 0x4620],
  color: 'green'
};

var t = {
  blocks: [0x0E40, 0x4C40, 0x4E00, 0x4640],
  color: 'purple'
};

var z = {
  blocks: [0x0C60, 0x4C80, 0xC600, 0x2640],
  color: 'red'
};

function eachblock(type, x, y, dir, fn) {
  var bit, result;
  var row = 0;
  var col = 0;
  var blocks = type.blocks[dir];

  for (bit = 0x8000; bit > 0; bit = bit >> 1) {
    if (blocks & bit) {
      fn(x + col, y + row);
    }

    if (++col === 4) {
      col = 0;
      ++row;
    }
  }
}

function occupied(type, x, y, dir) {
  var result = false;

  eachblock(type, x, y, dir, function(x, y) {
    if ((x < 0) || (x >= nx) ||
        (y < 0) || (y >= ny) || (getBlock(x, y))) {
      result = true;
    }
  });

  return result;
}

function unoccupied(type, x, y, dir) {
  return !occupied(type, x, y, dir);
}

var pieces = [];

function randomPiece() {
  if (pieces.length === 0) {
    pieces = [
      i, i, i, i, j, j, j, j, l, l, l, l,
      o, o, o, o, s, s, s, s, t, t, t, t, z, z, z, z
    ];
    var type = pieces.splice(random(), 1)[0];

    return { type: type, dir: DIR.UP, x: 2, y: 0 };
  }
}
