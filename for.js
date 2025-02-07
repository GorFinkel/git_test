let arr = ["a", "b", "c"];
let action = () => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += "ccc";
    console.log(arr[i]);
  }
};
action();

let arr2 = [
  [1, 3],
  [5, 2],
  [7, 4],
];
let action2 = () => {
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2[i].length; j++) {
      console.log(arr2[i][j]);
    }
  }
};
action2();
