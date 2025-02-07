const namer = ["Jack", "Laura", "Paul", "Megan"];
console.log(namer[0]);

const names = new Array();
names.push("Jack", "Laura", "Paul", "Megan");
console.log(names[2]);

const nam = [];
nam.push("Jack", "Laura", "Paul", "Megan");
console.log(nam);
console.log(nam.length);
nam.magician = "Elyse";
console.log(nam.length); //didnt not change length
console.log(nam);
nam.forEach((na) => console.log(na));
delete nam[2];
console.log(nam);
console.log(nam.length);
nam.forEach((na) => console.log(na));
names.splice(1, 1); //no Laura and changes length
names;
console.log(names.length);
names.length = 5;
names;
names.length = 2;
names;
names.length = 3;
names;
console.log(typeof names);
console.log(Array.isArray(names));
const test = {};
console.log(Array.isArray(test));
names.pop();
names.push("Fred");
names;
names.shift();
names;
names.unshift("Jill");
names;
names.splice(1, 1, "Julie", "Juice");
names;
