import axios from "axios";
// const axios = require("axios").default;

const randomAPI = "https://randomuser.me/api/?results=24";

const fetcher = async () => {
  // let array = [];
  try {
    const response = await axios.get(randomAPI);

    const users = await response.data.results;
    // await array.push(users);
    // console.log(array);
    // return array;

    // console.log(response.data.results);
    // console.log(users);
    return users;
  } catch (err) {
    console.log(err.message);
  }
  // console.log(usersData);
};
const myUsersData = fetcher();

export default myUsersData;
export { randomAPI };

/////
