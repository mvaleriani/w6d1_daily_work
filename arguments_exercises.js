function sum1 () {
  let newSum = 0;
  for (var i = 0; i < arguments.length; i++) {
    newSum += arguments[i];
  }
  return newSum;
}

function sum2 (...args) {
  let newSum = 0;
  args.forEach(el => { newSum += el; } );
  return newSum;
}

// console.log(sum1(1,2,3,4));
// console.log(sum2(1,2,3,4));
Function.prototype.myBind1 = function (ctx) {
  // console.log(arguments);
  let oldThis = this;
  let args = Array.from(arguments);
  args = args.slice(1);


  return function newSays() {
    let callArgs = Array.from(arguments);
    oldThis.apply(ctx, args.concat(callArgs)); };

};

Function.prototype.myBind2 = function (ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// markov.says.myBind1(breakfast, "bark", "Kush")();
// markov.says.myBind1(breakfast)("meow", "a tree");


function curriedSum (numArgs) {
  let numbers = new Array;

  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach(el => { sum += el; });
      return sum;
    } else {
      return _curriedSum;
    }
  };
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));

Function.prototype.curry1 = function (numArgs) {
  let args = [];
  let ctx = this;

  function newCurry(newArg) {
    args.push(newArg);
    if (args.length === numArgs) {
      return ctx.apply(null, args);
    } else {
      return newCurry;
    }
  }

  return newCurry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree.curry1(3)(4)(20)(6));



Function.prototype.curry2 = function (numArgs) {

};
