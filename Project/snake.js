var death;
var score;


function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1){
      this.total++;
      return true;
    } else {
      return false;
    }
  }

//The code that converts the x and y direction into x and y vector speeds
  this.dir = function(x,y){
    this.xspeed = x;
    this.yspeed = y;
  }

//The code handling death, by testing for collisions between the head and a tail
//fragment of the snake. Also works when the snake runs into a wall
  this.death = function(){
    for(var i = 0; i < this.tail.length;i++){
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1 ){
        //createElement('h3', 'You have Died with a score of ' + this.total);
        scoreTotal = scoreTotal + this.total;
        this.total = 0;
        this.tail = [];
        time = 150;
        timeAdd = 50;
        deaths = deaths + 1;
      }
    }
  }

//Update function, any code within this gets run every time the display window is
//updated. Used for moving the snake, adding segments, and moving towards the food
  this.update = function() {
    if (this.total === this.tail.length){
      for(var i = 0; i < this.tail.length-1; i++){
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1] = createVector(this.x, this.y);

//Used to help the snake locate the food.
    distFoodx = this.x - food.x;
    distFoody = this.y - food.y;
    //text(distFoodx, 300, 350);
    //text(distFoody, 300, 400);
    //text('X: ' + this.x, 300, 300);
    //text('Y: ' + this.y, 300, 350);







//This is the code responsible for deciding which of the pseudo-aritificial
//intelligence algorithm gets used in the program
  this.inputMethod = 2;









    text('Method: ' + this.inputMethod, 150, 30);
    text('Gen: ' + (deaths + 1), 305, 30);


//This is the pseudo-aritificial intelligence hardwired into the game.
    if (this.inputMethod == 1) {
      if (distFoodx < 0) {
        s.dir(1,0);
      } else if (distFoodx > 0) {
        s.dir(-1,0);
      } else if (distFoody > 0){
        s.dir(0,-1);
      } else if (distFoody < 0) {
        s.dir(0,1);
      }
    }

    else if (this.inputMethod == 2) {
      if ((distFoody > 0) && (this.yspeed != 1)){
        s.dir(0,-1);
      } else if ((distFoody < 0) && (this.yspeed != -1)) {
        s.dir(0,1);
      } else if ((distFoodx < 0) && (this.xspeed != 1)) {
        s.dir(1,0);
      } else if ((distFoodx > 0) && (this.xspeed != -1)) {
        s.dir(-1,0);
      }
    }


    else if (this.inputMethod == 3) {
      if ((this.y == 0) && (this.yspeed == -1)){
        s.dir(1,0);
      } else if ((this.y == 0) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 20) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 20) && (this.x == 20)){
        s.dir(0,1);
      } else if ((this.y == 40) && (this.x == 20)){
        s.dir(1,0);
      } else if ((this.y == 40) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 60) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 60) && (this.x == 20)){
        s.dir(0,1);
      } else if ((this.y == 80) && (this.x == 20)){
        s.dir(1,0);
      } else if ((this.y == 80) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 100) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 100) && (this.x == 20)){
        s.dir(0,1);
      } else if ((this.y == 120) && (this.x == 20)){
        s.dir(1,0);
      } else if ((this.y == 120) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 140) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 140) && (this.x == 20)){
        s.dir(0,1);
      } else if ((this.y == 160) && (this.x == 20)){
        s.dir(1,0);
      } else if ((this.y == 160) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 180) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 180) && (this.x == 20)){
        s.dir(0,1);
      } else if ((this.y == 200) && (this.x == 20)){
        s.dir(1,0);
      } else if ((this.y == 200) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 220) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 220) && (this.x == 20)){
        s.dir(0,1);
      } else if ((this.y == 240) && (this.x == 20)){
        s.dir(1,0);
      } else if ((this.y == 240) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 260) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 260) && (this.x == 20)){
        s.dir(0,1);
      } else if ((this.y == 280) && (this.x == 20)){
        s.dir(1,0);
      } else if ((this.y == 280) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 300) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 300) && (this.x == 20)){
        s.dir(0,1);
      } else if ((this.y == 320) && (this.x == 20)){
        s.dir(1,0);
      } else if ((this.y == 320) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 340) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 340) && (this.x == 20)){
        s.dir(0,1);
      } else if ((this.y == 360) && (this.x == 20)){
        s.dir(1,0);
      } else if ((this.y == 360) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 380) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 380) && (this.x == 20)){
        s.dir(0,1);
      } else if ((this.y == 400) && (this.x == 20)){
        s.dir(1,0);
      } else if ((this.y == 400) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 420) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 420) && (this.x == 20)){
        s.dir(0,1);
      } else if ((this.y == 440) && (this.x == 20)){
        s.dir(1,0);
      } else if ((this.y == 440) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 460) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 460) && (this.x == 20)){
        s.dir(0,1);
      } else if ((this.y == 480) && (this.x == 20)){
        s.dir(1,0);
      } else if ((this.y == 480) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 500) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 500) && (this.x == 20)){
        s.dir(0,1);
      } else if ((this.y == 520) && (this.x == 20)){
        s.dir(1,0);
      } else if ((this.y == 520) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 540) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 540) && (this.x == 20)){
        s.dir(0,1);
      } else if ((this.y == 560) && (this.x == 20)){
        s.dir(1,0);
      } else if ((this.y == 560) && (this.x == 580)){
        s.dir(0,1);
      } else if ((this.y == 580) && (this.x == 580)){
        s.dir(-1,0);
      } else if ((this.y == 580) && (this.x == 0)){
        s.dir(0,-1);
      }




    }


//Moving the snake in the desired direction by the scale
    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

//Constrains the snake to the window so it's always visible.
    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);

/*
//Code responsible for taking away time, used for score, and ending the game if
//the time runs out.
    time-=1;
    if (time < 0){
      createElement('h3', 'You ran out of time...');
      this.total = 0;
      this.tail = [];
      time = 150;
      timeAdd = 50;
    }

*/
}

//Draws the snake head and body white
  this.show = function() {
    fill(255);
    for(var i = 0; i < this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
}
