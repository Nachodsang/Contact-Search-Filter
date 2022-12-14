import React from "react";
import "./ChatBody.css";
import ContactBar from "./ContactBar";
import DisplaySection from "./DisplaySection";

function ChatBody() {
  return (
    <div>
      <h1 className="chat-body">ChatBody</h1>
      <ContactBar />
      <DisplaySection />
    </div>
  );
}

export default ChatBody;
