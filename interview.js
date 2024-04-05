function higforderFunction(func) {
  console.log("highOrderFuction");
  func();
}

function example() {
  console.log("exapmple function");
}

// higforderFunction(example);

const cars = [
  {
    color: "white",
    type: "SUV",
    registration: new Date("2020-12-29"),
    capacity: 5,
  },
  {
    color: "black",
    type: "Sedan",
    registration: new Date("2021-12-29"),
    capacity: 4,
  },
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "sports car",
    registration: new Date("2024-01-01"),
    capacity: 2,
  },
];

// const checkCapacity = (capacity) => {
//   // return cars.filter((e) => e.capacity >= capacity);
//   let tempArr = {};
//   for (let i = 0; i < cars.length; i++) {
//     let temp = cars[i];
//     if (cars[i].capacity >= capacity) {
//       tempArr = { ...tempArr, [temp.type]: temp.capacity };
//     }
//   }
//   return tempArr;
// };

// console.log(checkCapacity(4));

// Given an array arr[] containing N integers, the task is to check whether the array is monotonic or not (monotonic means either the array is in increasing order or in decreasing order).
// Examples:

// Input:
//  arr[] = {1, 2, 2, 3}
//  Output: Yes Explanation: Here 1 < 2 <= 2 < 3.
// The array is in increasing order. Therefore it is monotonic.
// Input:
// arr[] =  {6, 5, 4, 3}
// Output: Yes Explanation: Here 6 > 5 > 4 > 3.  The array is in decreasing order. So it is monotonic.

const checkMonolithic = (arr) => {
  let order = "";
  let result = true;
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i]);

    let temp = arr[i];
    if ((i === 0) & (temp > arr[i + 1])) {
      order = "desc";
    } else if (i === 0) {
      order = "asc";
    }

    if (order === "desc") {
      if (!(temp >= arr[i + 1])) {
        result = false;
      }
    }

    if (order === "asc") {
      if (!(temp <= arr[i + 1])) {
        result = false;
      }
    }
  }
  console.log(result);
  return result ? "monotonic" : "non monotonic";
};

console.log(checkMonolithic([1, 2, 0, 4]));

const getDays = (DateOfBirth) => {
  const startDate = new Date(DateOfBirth);
  const endDate = new Date();

  const data =
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

  return data;
};

const result = getDays(new Date("1998-11-23"));

console.log(result);
