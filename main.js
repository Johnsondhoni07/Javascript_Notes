const data = {
  firstName: "johnson",
  lastName: "Deva",
};

const getName = function (city, state) {
  console.log(
    `I am ${this.firstName + " " + this.lastName} from ` + city + " " + state
  );
};

//Call Method  invokes a function directly by passing a reference for this method
// getName.call(data, "Tuticorin", "Tamil Nadu");

//Similar to call were the function parameter are in array
// getName.apply(data, ["Tuticorin", "Tamil Nadu"]);

//Bind method returns a function which is invoked later
// const bindReturn = getName.bind(data, "Tuticorin", "Tamil Nadu");
// bindReturn();

//PolyFill
//--Write own implementation of functions




//polyfill for bind

// Function.prototype.myBind = function (scope, ...args) {
//   scope._this = this;
//   return function (...args2) {
//     scope._this(...args, ...args2);
//   };
// };

// Function.prototype.myCall = function (scope, ...args) {
//   scope._this = this;
//   return scope._this(...args);
// };

// Function.prototype.myApply = function (scope, args) {
//   scope._this = this;
//   return scope._this(...args);
// };

// const polyBind = getName.myBind(data, "tuticorin", "TamilNadu");
// polyBind();
// console.log(getName.myCall(data, "tut", "tam"));
// console.log(getName.myApply(data, ["tut", "tam"]));
