function checkNumber(num) {
  let message = "";

  if (num === 0) {
    message = "You passed 0, please provide another number.";
  } else {
    message = "Thanks for passing such a nice number.";
  }

  return message;
}
console.log(checkNumber(1));

function checkNumber1(num) {
  let message = "";
  if (num === 0) {
    message = "Not 0";
    return message;
  }
  message = "Yes more than 0";
  return message;
}
console.log(checkNumber1(1));

let a = 1;
let doSomething = () => console.log("hello");
if ((a = 1)) doSomething();

let func = (num) => {
  const isPositive = num >= 0;
  const isSmall = num < 1;
  if (isPositive && isSmall) {
    console.log("Positive and small");
  } else if (isPositive) {
    console.log("Positive ");
  } else if (isSmall) {
    console.log(" small");
  }
};
func(0);
func(1);
func(-1);
