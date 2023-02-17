const filterBySearch = (user = {}, filterSearch = "") => {
  const userFirstName = user.name.first;
  const userLastName = user.name.last;
  const userBothNames = `${userFirstName} ${userLastName}`;
  console.log(userBothNames);
  // const keys = [userLastName, userFirstName]
  const result =
    userFirstName.toLowerCase().trim().includes(filterSearch.trim()) ||
    userLastName.toLowerCase().includes(filterSearch.trim()) ||
    userBothNames
      .toLowerCase()
      .replace(" ", "")
      .includes(filterSearch.replace(" ", "").trim());

  console.log(result);
  return result;
  //   return pokemonName.toLowerCase().includes(filterSearch);
};

// filterBySearch(
//   {
//     name: {
//       first: "John",
//       last: "Wick",
//     },
//   },
//   "ck"
// );

export default filterBySearch;
