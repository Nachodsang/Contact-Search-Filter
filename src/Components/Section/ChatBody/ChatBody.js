import React from "react";
// import "./ChatBody.css";
// import ContactBar from "../../ContactBar";
// import DisplaySection from "../../DisplaySection";

function ChatBody({ userList, searchChar, display, showProfile }) {
  const user = display;
  const valid = userList.length > 0 && showProfile;

  console.log(valid);
  const ProfileOnDisplay = () => {
    return (
      <div className="flex flex-col gap-y-5 justify-center items-center ">
        <div className="rounded-full w-[200px] lg:min-w-[280px] bg-gradient-to-t from-purple-500 to-pink-500  shadow-lg cursor-pointer mb-3">
          <img
            className="rounded-full w-[180px] lg:min-w-[250px] "
            src={user?.picture?.large}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="font-bold lg:text-5xl text-gray-600">
            {user?.name?.first} {user?.name?.last}
          </p>
          <p className="lg:text-4xl text-gray-500">Age: {user?.dob?.age}</p>
          <p className="text-gray-400 text-xl">
            {user?.location?.state}, {user?.location?.country}
          </p>
          <p className="lg:text-xl font-semibold text-gray-700">
            {user?.email}
          </p>
          <p className="lg:text-2xl text-gray-700">Call: {user?.cell}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full  flex flex-col justify-center items-center h-[70vh] md:h-full  pt-30 ">
      <h1 className="font-bold text-4xl py-10 text-center tracking-wider">
        Profile<span className="text-blue-300 text-6xl  ">.</span>
      </h1>
      {valid ? (
        <ProfileOnDisplay className="transition duration-500" />
      ) : (
        <div className="text-5xl text-center transition-all duration-500">
          Please Search for your contact
        </div>
      )}

      {/* <ContactBar />
      <DisplaySection /> */}
    </div>
  );
}

export default ChatBody;
