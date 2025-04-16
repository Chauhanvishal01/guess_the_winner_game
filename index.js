let score = 0;
let right, wrong;
let start;

function isRight(right) {
  if (right) {
    score += 1;
  }
}

function isRestart(start) {
  if (start) {
    score = 0;
  }
}
