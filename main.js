const data = {
  firstName: "Johnson",
  lastname: "Deva",
};

const getName = () => {
  console.log(
    "first name is" + this.firstName + "and last name is" + this.lastname
  );
};

const fuc = getName.bind(data);
console.log(fuc);
