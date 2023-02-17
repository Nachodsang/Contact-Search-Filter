import { ContactList, HeaderContactBar } from "@compo";
import React from "react";
// import classes from "./ContactBar.module.css";

function ContactBar({
  usersList,
  onSearch,
  onClick,
  onSort,
  sort,
  setUserName,
}) {
  return (
    <div className="flex flex-col items-center h-[70%] md:h-full px-4 md:py-10 pb-32 ">
      <h1 className="text-gray-700 text-4xl font-bold tracking-wide p-4 ">
        Contact List <span className="text-6xl text-yellow-400">.</span>
      </h1>
      <div className="flex flex-col-reverse items-start md:flex-col h-full     ">
        <HeaderContactBar
          onSearch={onSearch}
          onSort={onSort}
          sort={sort}
          setUserName={setUserName}
        />
        <ContactList users={usersList} onClick={onClick} />
      </div>
    </div>
  );
}

export default ContactBar;
