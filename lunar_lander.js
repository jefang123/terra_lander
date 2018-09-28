const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
var ballRadius = 40;
var x = canvas.width/2;
var y = 30;
var dx = 0;
var dy = .50;
var xspd = 0;
var yspd = 0;
var state = "MOVING";
var time = 0;
var fuel = 1000;
var vy;
var atime = 1;
var aticker = setInterval(atick, 1000);
var angle = -90; 

var toRadian = Math.PI / 180;
//img size seems to be 45x45
// Math.cos(angle*toRadian) => dy
// Math.sin(angle*toRadian) => dx


var states=  [
    "MOVING",
    "BOOM",
    "LAND"
  ]

function atick() {
  atime += 1
}

function tick() {
  time += 1
}

setInterval(tick, 1000)

var img = new Image();

var spriteWidth  = 350,
    spriteHeight = 170,
    pixelsLeft   = 170,
    pixelsTop    = 10,

    // Where are we going to draw
    // the sprite on the canvas
    canvasPosX   = 20,
    canvasPosY   = 20
;

function drawGround() {
  ctx.beginPath();
  ctx.moveTo(0, canvas.height -30 )
  ctx.lineTo(canvas.width, canvas.height -30)
  ctx.stroke();
}



function drawBall() {
  debugger
  ctx.beginPath();
  ctx.arc(x,y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD"
  ctx.fill();
  ctx.closePath();

}
function drawState() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD"
  ctx.fillText("State: "+state, canvas.width-100, 20)
}

function drawVelocity() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD"
  ctx.fillText("Velocity: "+vy, canvas.width-100, 100)
}

function drawangle() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD"
  ctx.fillText("Angle: "+angle, 0, 60)
}

function drawTime() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD"
  ctx.fillText("Time: "+time, 0, 20)
}

function drawFuel() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD"
  ctx.fillText("Fuel: "+Math.floor(fuel), 0, 40)
}

function drawDY() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD"
  ctx.fillText("Y: "+yspd, canvas.width-100, 40)
}



function drawDX() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD"
  ctx.fillText("X: "+xspd, canvas.width-100, 60)
}

function drawatime() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD"
  ctx.fillText("ATime: "+atime, canvas.width-100, 80)
}

function draw() {
  img.src;
  if (angle >= -90 && angle < -10) {
    img.src = 'shuttle4_0.png'
  }
  if (angle >10 && angle <= 90) {
    img.src = 'shuttle3_0.png'
  } 
  if (angle >= -10 && angle <= 10) {
  img.src = 'shuttle2_0.png';
  }
  ctx.clearRect(0,0, canvas.width, canvas.height);
  // ctx.save();
  // ctx.translate(canvas.width/2, canvas.height/2)
  // ctx.rotate(angle*toRadian);
  ctx.drawImage(img,x,y);
  // ctx.restore();
  drawTime();
  drawFuel();
  // drawBall();
  drawState();
  drawatime();
  drawVelocity();
  drawangle();
  drawDY();
  drawDX();
  drawGround();

  if (rightPressed && angle < 90 ) {
    angle += 1   
  }
  else if (leftPressed && angle > -90 ) {
    angle -= 1 
  }

  if (upPressed && fuel == 0) {
    upPressed = false
  }
  if (upPressed) {
    yspd = Math.cos(angle*toRadian)
    xspd = Math.sin(angle*toRadian)
    fuel -= .05;
  } 

  if(!upPressed) {
    yspd = 0;
    xspd = 0;
  }
 
  let initialv = dy*atime;
  let velocity = yspd*atime;
  vy = velocity
  x += (dx+xspd);
  y += (initialv-velocity);

  if (state === states[0]) {

    if (y >= (canvas.height -(30 + 45))) {
      y = canvas.height - (30 + 45)
      state = states[1];
      alert("game over")
    } 
  }

}

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.keyCode == 39) {
      rightPressed = true;
     
  }
  else if(e.keyCode == 37) {
      leftPressed = true;
      
  }
  else if(e.keyCode == 38) {
      upPressed = true;
  }
  else if(e.keyCode == 40) {
    downPressed = true
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 39) {
      rightPressed = false;
      
  }
  else if(e.keyCode == 37) {
      leftPressed = false;
  }
  else if(e.keyCode == 38) {
      upPressed = false;
      atime = 1;
  }
  else if(e.keyCode == 40 ) {
    downPressed = false;
  }
}
setInterval(draw, 10);

// ctx.drawImage(img,
//   pixelsLeft,
//   pixelsTop,
//   spriteWidth,
//   spriteHeight,
//   canvasPosX,
//   canvasPosY,
//   spriteWidth,
//   spriteHeight
// );

