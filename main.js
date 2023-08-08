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

//curring
// function multiply(x, y) {
//   return x * y;
// }

// console.log(multiply(3, 2));
// const multiplybyTwo = multiply.myBind(this, 2);
// console.log(multiplybyTwo(10));

// function multiply(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// let multiplybyTwo = multiply(2);
// console.log(multiplybyTwo(3));
// console.log(multiply(2)(1))

// normal Script tag
// html parsing > fetching script > execution script >HTMl parsing

//Async
//html parsing & fetchScript -> execution -> html parsing

//Defer
//Html parsing & fetch Script -> html Parsing -> execution

//Debouncing
// Debouncing is a technique to stop time consuming
// tasks do not fire to often which reduces app performance
// let invokes = 0;
// const getData = function () {
//   let text = document.getElementById("myText").value;
//   console.log("fetched", invokes++, text);
// };

// let interval;
// const debounce = function () {
//   clearInterval(interval);
//   interval = setTimeout(() => {
//     getData();
//   }, 400);
// };

//Throttling

// const throttle = (func, limit) => {
//   let makeCall = true;
//   return function () {
//     if (makeCall) {
//       func();
//       makeCall = false;
//       setTimeout(() => {
//         makeCall = true;
//       }, limit);
//     }
//   };
// };

// let i = 0;
// const betterThrottle = throttle(() => {
//   console.log("resize", i++);
// }, 500);
// window.addEventListener("resize", betterThrottle);

//Debouncing vs Throttling
//Debouncing is a technique to fire a task on a continuos event after certain interval between the event
//throttling is technique to fire a task on certain interval when event occurs

//Event Propagation
document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("grandParent Clicked");
  },
  true
);
document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked");
  },
  true
);
document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked");
  },
  true
);

// Event Progation
//   1 - Bubbling(Child to parent)
//   2 - Capturing(Parent to child) or Trickling
