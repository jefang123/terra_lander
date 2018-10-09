function gameStart () {
  draw();
  tick = setInterval(ticker, 1000);
  groundArray = [];
  landingArr = [];
  starArr = [];
  starState = false;
  fillGroundArray();
  fillStars();
}

function endGame() {
  clearInterval(tick);
}

if (state !== "MOVING" ) {
  endGame();
}

function firstdraw() {
  state = states[3];
  drawStart();
}

firstdraw();

canvas.onclick = function () { 
  if (state == states[1]) {
    x = 50;
    y = 30;
    ax = 0;
    ay = 0;
    xspd = 2;
    yspd = .001;
    state = "MOVING";
    time = 0;
    angle = -90; 
    gameStart();
  } 
  else if (state == states[2]) {
    x = 50;
    y = 30;
    ax = 0;
    ay = 0;
    xspd = 2;
    yspd = .001;
    state = "MOVING";
    time = 0;
    angle = -90; 
    gameStart();
  }  
  else if (state == states[3]) {
    fuel = 1000;
    x = 50;
    y = 30;
    ax = 0;
    ay = 0;
    xspd = 2;
    yspd = .001;
    state = "MOVING";
    time = 0;
    angle = -90; 
    gameStart();
  }
 };