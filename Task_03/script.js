const canvas = document.getElementById('circle-canvas');
const ctx = canvas.getContext('2d');
const feedbackEl = document.getElementById('feedback');
const currentScoreEl = document.getElementById('current-score');
const bestScoreEl = document.getElementById('best-score');
const resetBtn = document.getElementById('reset-btn');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const centerRadius = 6;

let drawing = false;
let points = [];
let bestScore = 0;

// Get mouse position relative to canvas
function getMousePos(evt) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

// Draw the red dot at canvas center
function drawCenterDot() {
  ctx.beginPath();
  ctx.arc(centerX, centerY, centerRadius, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
}

// Clear canvas and redraw everything
function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCenterDot();

  if(points.length > 0) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for(let i=1; i<points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.stroke();
  }
}

// Calculate circle perfection score (0-100)
function calculateScore(points) {
  if(points.length < 10) return 0;
  const distances = points.map(p => Math.hypot(p.x - centerX, p.y - centerY));
  const meanDist = distances.reduce((a,b) => a+b)/distances.length;
  const avgDeviation = distances.reduce((sum, d) => sum + Math.abs(d - meanDist), 0)/distances.length;

  const maxAllowedDeviation = 100; // tweak for difficulty
  let score = 100 - (avgDeviation / maxAllowedDeviation) * 100;
  score = Math.max(0, Math.min(100, score));
  return Math.round(score);
}

// Start drawing
canvas.addEventListener('mousedown', (e) => {
  drawing = true;
  points = [];
  const pos = getMousePos(e);
  points.push(pos);
  redraw();
  feedbackEl.textContent = 'Drawing...';
});

// Draw line and record points
canvas.addEventListener('mousemove', (e) => {
  if(!drawing) return;
  const pos = getMousePos(e);
  points.push(pos);
  redraw();
});

// Stop drawing and calculate score
canvas.addEventListener('mouseup', (e) => {
  drawing = false;
  const score = calculateScore(points);
  feedbackEl.textContent = `Your circle perfection: ${score}%`;
  currentScoreEl.textContent = `Score: ${score}`;

  if(score > bestScore) {
    bestScore = score;
    bestScoreEl.textContent = `Best: ${bestScore}`;
  }
});

// Reset button resets game and canvas
resetBtn.addEventListener('click', () => {
  points = [];
  drawing = false;
  currentScoreEl.textContent = 'Score: 0';
  feedbackEl.textContent = 'Draw a circle around the red dot!';
  redraw();
});

// Initialize canvas on load
redraw();

