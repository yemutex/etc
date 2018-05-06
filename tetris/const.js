const KEY = {
  esc:    27,
  space:  32,
  left:   37,
  up:     38,
  right:  39,
  down:   40
};

const DIRECTION = {
  up:     0,
  right:  1,
  down:   2,
  left:   3
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

const canvas = get('canvas');
const ctx = canvas.getContext('2d');
const ucanvas = get('upcoming');
const uctx = ucanvas.getContext('2d');
const speed = { start: 0.6, decrement: 0.005, min: 0.1 };
const nx = 10; // width of tetris court (in blocks)
const ny = 20; // height of tetris court (in blocks)
const nu = 5;  // width/height of upcoming preview (in blocks)
