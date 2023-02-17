import React from "react";
// import styles from "./Search.module.css";

function Search({ onSearch, onSort, sort }) {
  const searchHandler = (event) => {
    onSearch(event.target.value);
  };

  const sortHandler = () => {
    onSort();
  };
  return (
    <div className="flex flex-col justify-center items-center border-b md:border-b-0 md:border-t border-gray-400 py-6 gap-y-4 w-full mt-[20px] md:mb-0 mb-4">
      <input
        type="string"
        placeholder="Search Your Contact"
        onChange={searchHandler}
        className="  border-purple-500 focus:border-pink-500 border text-center text-gray-800 rounded-lg outline-none"
      />
      <div className="flex justify-start items-center gap-x-4">
        <label className="font-bold text-2xl">Filter By:</label>
        {sort === "name" ? (
          <div
            className="border py-2 px-5 rounded-md border-white text-white min-w-[100px] min-h-[50ppx] flex justify-center cursor-pointer transition duration-500 bg-gradient-to-l from-purple-500 to-pink-500 "
            onClick={sortHandler}
          >
            <h1 className="font-bold">Name</h1>
          </div>
        ) : (
          <div className="" onClick={sortHandler}>
            <h1 className="border py-2 px-5 rounded-md font-bold border-white min-h-[50ppx]  text-white min-w-[100px] flex justify-center cursor-pointer transition bg-gradient-to-r from-purple-500 to-pink-500  duration-500">
              Age
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
