import React, { useState, useEffect } from "react";

import { ChatBody, ContactBar } from "@compo";

import Footer from "../Part/Footer";

// import classes from "./DisplaySection.module.css";
import myUsersData from "@/Store/axios";
import filterBySearch from "./helper";
import Header from "../Part/Header";

//get user list function to filter user and store in new array
const userList = (user = [], search) => {
  if (search) {
    const users = user.filter((u) => {
      const searchedResults = filterBySearch(u, search);
      // const sortedSearchedResults = [...searchedResults].sort((a, b) => {
      //   return a.name.first - b.name.first;
      // });
      // console.log(sortedSearchedResults);
      return searchedResults;
    });

    return users;
  } else {
    return user;
  }
};

//component
function DisplaySection() {
  //state
  const [user, setUser] = useState([]);
  const [searchState, setSearchState] = useState("");
  const [userOnDisplay, setUserOnDisplay] = useState([]);
  const [selectProfile, setSelectProfile] = useState({});
  const [showProfile, setShowProfile] = useState(false);
  const [sortState, setSortState] = useState("name");
  const [name, setName] = useState("");
  //fetching
  const myFetcher = async () => {
    let userArray = [];
    // console.log(myUsersData);
    const usersList = await myUsersData;
    // console.log(usersList);

    //sorted Array

    userArray = [...usersList].sort((a, b) => {
      return a.name.first < b.name.first
        ? -1
        : a.name.first > b.name.first
        ? 1
        : 0;
    });

    console.log(userArray);
    setUser(userArray);
    setUserOnDisplay(userArray);
  };

  // searching;
  // calling userList with user and search as args
  const searchHandler = (search) => {
    const loweredSearch = search.toLowerCase();
    setSearchState(loweredSearch);
    // const getUsersList = userList(user, searchState);
    // console.log(searchState);
    // console.log(getUsersList);

    // setUserOnDisplay(getUsersList);

    //enable profile show
    // searchState.length > 0 && setShowProfile(true);
  };

  // const changeHandler = (e) => {
  //   setSearchState(e.target.value);
  //   const getUsersList = user.filter((u) =>
  //     u.name.first.toLowerCase().includes(searchState)
  //   );
  //   // const getUsersList = userList(user, searchState);
  //   // console.log(getUsersList);
  //   setUser(getUsersList);
  // };

  const clickHandler = (select) => {
    console.log(select);
    //received email and find profile the matches email from the list
    const selected = userOnDisplay.find((i) => {
      return i.email === select;
    });

    //setSelectProfile state to the found profile
    setSelectProfile(selected);
    !showProfile && setShowProfile(true);
    showProfile && selectProfile === selected && setShowProfile(false);
  };
  //SORT switch
  const sortHandler = (sort) => {
    sortState === "name" ? setSortState("age") : setSortState("name");
    console.log(sortState);
  };

  //useEffect
  useEffect(() => {
    myFetcher();
    // setUserOnDisplay(user);
    // console.log(userOnDisplay);
  }, []);

  useEffect(() => {
    let sortedList = [];
    // console.log(searchState);
    //changing everyttime search change
    //rendering list matches search
    const getUsersList = userList(user, searchState);

    //sorting user list after search
    sortState === "name"
      ? (sortedList = getUsersList.sort((a, b) => {
          return a.name.first < b.name.first
            ? -1
            : a.name.first > b.name.first
            ? 1
            : 0;
        }))
      : (sortedList = getUsersList.sort((a, b) => a.dob.age - b.dob.age));

    setUserOnDisplay(sortedList);

    //set profile show state and get the first in the list shown

    setSelectProfile(sortedList[0]);
    searchState.length > 0 ? setShowProfile(true) : setShowProfile(false);

    // setShowProfile(true);
  }, [searchState, sortState]);

  const setUserName = (userInput) => {
    setName(userInput);
  };
  return (
    <div className=" w-full h-full bg-gradient-to-bl from-purple-500 to-pink-500 ">
      <Header userName={name} />
      <div className="mx-auto max-w-[1440px] flex w-full  px-4  pt-[50px] h-[200vh] md:h-screen  bg-white md:flex-row flex-col-reverse rounded-r-full ">
        <ContactBar
          usersList={userOnDisplay}
          onSearch={searchHandler}
          onClick={clickHandler}
          onSort={sortHandler}
          sort={sortState}
          setUserName={setUserName}
        />
        <ChatBody
          searchChar={searchState}
          userList={userOnDisplay}
          display={selectProfile}
          showProfile={showProfile}
        />
      </div>
    </div>
  );
}

export default DisplaySection;
