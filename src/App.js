// import "./App.css";
import React, { useState, useEffect } from "react";
import { DisplaySection } from "@compo";
import myUsersData from "./Store/axios";

import Footer from "./Components/Part/Footer";
function App() {
  return (
    <div className="relative h-[100vh]">
      <DisplaySection />
      <Footer className="w-full" />
    </div>
  );
}

export default App;
