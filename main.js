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
