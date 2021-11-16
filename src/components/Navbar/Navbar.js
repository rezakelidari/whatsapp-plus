import React from "react";
import Styles from "./Navbar.module.css";

import Title from "../Title/Title";
import { SignOut } from "../../services/Firebase";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <Title />
      <button className={Styles.navLogout} onClick={() => SignOut(navigate)}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
