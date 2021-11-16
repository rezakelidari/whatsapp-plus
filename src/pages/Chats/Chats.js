import React from "react";
import Styles from "./Chats.module.css";
import { SignOut } from "../../services/Firebase";
import { useNavigate } from "react-router";

function Chats() {
  const navigate = useNavigate();
  return (
    <div className={Styles.chatsMain}>
      <button onClick={() => SignOut(navigate)}>Log out</button>
    </div>
  );
}

export default Chats;
