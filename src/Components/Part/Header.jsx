import React, { useState, useEffect } from "react";

function Header({ userName }) {
  const [headerIsOn, setHeaderIsOn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 20 ? setHeaderIsOn(true) : setHeaderIsOn(false);
    });
  });
  return (
    <div
      className={`${
        headerIsOn
          ? "bg-gradient-to-br  from-purple-500/50 to-pink-500/50 "
          : "bg-gradient-to-br from-purple-500 to-pink-500 "
      } p-7 fixed top-0 right-0 left-0 transition-all duration-1000`}
    >
      <div className="max-w-[1440px] px-4 mx-auto items-center justify-center flex md:justify-between  text-white">
        <h1 className="font-bold text-3xl cursor-pointer ">
          Header<span className="text-blue-300">.</span>
        </h1>

        <div className=" md:flex hidden justify-between gap-x-6">
          <span className="hover:text-blue-200 cursor-pointer font-semibold ">
            Search
          </span>
          <span className="hover:text-blue-200 cursor-pointer font-semibold  ">
            Contact List
          </span>
          <span className="hover:text-blue-200 cursor-pointer font-semibold ">
            Profile
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
