Function.prototype.inherits = function(parent) {
  // function Surrogate(){}
  //
  // Surrogate.prototype = parent.prototype;
  // this.prototype = new Surrogate();
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {}
MovingObject.prototype.move = function(){
  console.log("It moved");
};


function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);
Asteroid.prototype.crash = function () {
  console.log("It crashed!");
};
