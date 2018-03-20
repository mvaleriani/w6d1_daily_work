Function.prototype.inherits = function(parent) {
  // function Surrogate(){}
  //
  // Surrogate.prototype = parent.prototype;
  // this.prototype = new Surrogate();

  // this is the base class. You're trying to change methods of the base class.
  // this.__proto__ = parent.prototype
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

// Cat.parentClass = Dog;
// const gizmo = new Cat();
// gizmo.methods = Dog.methods;

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
