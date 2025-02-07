let f = function () {
  return 1 + 1;
};
console.log(f());
let f2 = (a, b) => a + b;

console.log(f2(3, 4));

const server2 = "https://randomuser.me/api?page=1";

const fetchUserr = () => {
  fetch(server2)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      const user = data.results?.[0];
      user ? console.log("User Data:", user) : console.warn("No users found.");
    })
    .catch((error) => console.error("Error fetching user:", error.message));
};

// Call the function
fetchUserr();

const server3 = "https://randomuser.me/api?page=1";

const fetchUser = async () => {
  try {
    const response = await fetch(server3);
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

    const { results } = await response.json();
    const user = results?.[0];

    user ? console.log("User Data:", user) : console.warn("No users found.");
  } catch (error) {
    console.error("Error fetching user:", error.message);
  }
};

// Call the function
fetchUser();
