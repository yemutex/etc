import { context, canvas } from './const';
import { playing } from './tetris';


export function draw() {
  context.save();
  context.lineWidth = 1;
  context.translate(0.5, 0.5);
  drawCourt();
  drawNext();
  drawRows();
  context.restore();
}

function drawCourt() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (playing) {
    drawPiece();
  }
}
