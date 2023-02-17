import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gradient-to-bl from-purple-500 to-pink-500 fixed bottom-0 px-4 ">
      <div className="py-4 px-10 flex flex-col md:flex-row justify-between items-center mx-auto max-w-[1440px]">
        <div className="flex">
          <div className="py-4 text-xs md:text-md  font-semibold text-white">
            Contact List ©2023 all rights reserved
          </div>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="md:text-4xl text-md tracking-wide font-bold leading-tight text-white">
            ContactList
            <span className="font-bold md:text-4xl  text-md text-blue-300 leading-tight">
              .
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
