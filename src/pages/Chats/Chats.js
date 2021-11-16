import React from "react";
import Styles from "./Chats.module.css";
import Navbar from "../../components/Navbar/Navbar";

function Chats() {
  return (
    <>
      <Navbar />
      <div className={Styles.chatsMain}>Chats</div>
    </>
  );
}

export default Chats;
