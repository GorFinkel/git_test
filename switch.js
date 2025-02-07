let action = (x) => {
  switch (x) {
    case 0: {
      x += 1;
      console.log(x);
      break;
    }
    case 1: {
      x += 2;
      console.log(x);
      break;
    }
    default: {
      console.log("Invalid");
    }
  }
};
action(9);
