//Definition of the variables is listed below
var s;            //our snake object
var scl = 20;     //scale we use throughout the game
var time = 150;   //the starting time we give the algorithm
var timeAdd = 50  //the time added after each successful food
var food;         //this is used for random assignment of food location
var deaths = 0;   //measures the amount of times the snake has died
var scoreTotal = 0;

function setup(){
//Here is where you change the size of the window, please do this
//in increments of the scale variable defined above. We then create our
//snake object, and run pickLocation to generate a location for the food.
  createCanvas(600,600);
  s = new Snake();
  pickLocation();
  textSize(30);

//Here is where you change the framerate of the window.
  frameRate(60);
}

//The pickLocation function divides the window into columns and rows,
//then it randomly places a piece of food somewhere within the bounds
//of the window, aligned with the scale of course
function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

//The draw function essentially displays anything we see in the window
function draw() {
  background(51);
  //text('Time: ' + floor(time/10), 10, 30);
  text('Score: ' + s.total, 10, 30);
  text('Mean: ' + floorFigure(scoreTotal/deaths, 2), 425, 30);
  //text('Deaths: ' + deaths, 400, 30);
  if(s.eat(food)){
//update timer and score
    pickLocation();
    time+=timeAdd;
    timeAdd++;
  }
//Code responsible for the updating and functioning of the snake.
  s.death();
  s.update();
  s.show();

//Code for creating the food and the randomly generated location, determined by
//pickLocation code above
  fill(250, 100, 100);
  rect(food.x, food.y, scl, scl);
}

function floorFigure(figure, decimals){
    if (!decimals) decimals = 2;
    var d = Math.pow(10,decimals);
    return (parseInt(figure*d)/d).toFixed(decimals);
}

//This allowed for the control of the snake by a user, remains on
//since the computer occasionally gets stuck.
  function keyPressed() {
  if (keyCode === UP_ARROW){
    s.dir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0,1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1,0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1,0)
  }
}

function mousePressed() {
  s.total++;
}

function mouseReleased() {
  s.total++;
}
