import React from "react";
import { Search, Profile } from "@compo";
// import styles from "./HeaderContactBar.module.css";

function HeaderContactBar({ onSearch, onSort, sort, setUserName }) {
  return (
    <div className="py-2  px-4 gap-y-2 flex md:flex-col flex-col-reverse  w-full  items-start mt-6 md:-mt-4 pb-20 md:pb-0">
      <Profile setUserName={setUserName} />
      <Search onSearch={onSearch} onSort={onSort} sort={sort} />
    </div>
  );
}

export default HeaderContactBar;
