import React from "react";
// import classes from "./ContactList.module.css";

function ContactList({ users, onClick }) {
  const clickHandler = (email) => {
    onClick(email);
  };

  console.log(users.length);
  return (
    <div
      className={`${
        users.length > 0 ? "bg-transparent" : "bg-yellow-100"
      } rounded-xl pt-5   lg:min-w-[440px] min-w-200 max-w-220 h-full block  overflow-scroll`}
    >
      {users.length > 0 ? (
        <ul className="flex flex-col justify-start items-center gap-y-4  px-4 w-full  ">
          {users.map((i) => (
            <div
              className="flex flex-col gap-y-5 cursor-pointer w-full "
              onClick={() => clickHandler(i.email)}
              key={Math.random()}
            >
              <li className="flex flex-row justify-start gap-x-8 items-center gap-y-2">
                <div>
                  <img
                    className="rounded-full shadow-lg lg:w-14 lg:h-14 w-6 h-6 object-cover"
                    src={i.picture.large}
                  />
                </div>

                <div className="flex flex-col justify-center items-start">
                  <p className="font-bold text-gray-700 mb-1 uppercase">
                    {i.name.first} {i.name.last}
                  </p>
                  <p className="font-sm text-gray-400 italic">{i.email}</p>
                </div>
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <div className="p-2 m-auto">
          <h1 className="text-center lg:text-3xl text-gray-700">
            No contact found<span className="text-blue-400 lg:text-4xl">.</span>
          </h1>
        </div>
      )}
    </div>
  );
}

export default ContactList;
