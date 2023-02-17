import React from "react";
// import styles from "./Profile.module.css";

const profileImage =
  "https://e0.365dm.com/18/12/1600x900/skysports-sergio-ramos-ramos_4527674.jpg?20190214111634";
function Profile({ setUserName }) {
  const handleNameInput = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div className="max-w-full flex flex-row items-center justify-start gap-y-4 ">
      <div className="max-w-[200px] w-[110px] rounded-full shadow-md z-0 bg-gradient-to-bl from-purple-500 to-pink-500 ">
        <img
          className="w-[100px] h-[100px] object-cover rounded-full "
          src={profileImage}
        />
      </div>
      <div>
        <input
          className="-z-10 b text-gray-900 text-center text-md font-medium outline-none rounded-lg"
          type="text"
          placeholder="Your name here"
          onChange={handleNameInput}
        />
      </div>
    </div>
  );
}

export default Profile;
