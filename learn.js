const server3 = "https://randomuser.me/api?page=1";

const test = async () => {
  try {
    const response = await fetch(server3);
    if (!response.ok) throw new Error(`Error status: ${response.status}`);

    const { results } = await response.json();
    const user = results?.[0];

    user ? console.log(user) : console.warn("User not found");
  } catch (error) {
    console.error(`Error fetching:`, error.message);
  }
};
test();
