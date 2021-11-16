import React from "react";
import Styles from "./Login.module.css";
import { useNavigate } from "react-router";

import Title from "../../components/Title/Title";
import GoogleLogo from "../../assets/img/google.svg";

import { Authenticate } from "../../services/Firebase";

function Login() {
  const navigate = useNavigate();

  return (
    <div className={Styles.loginMain}>
      <div className={Styles.loginHeader}>
        Welcome to <Title />
      </div>
      <button
        className={Styles.loginWithGoogle}
        onClick={() => Authenticate(navigate)}
      >
        Login with
        <div className={Styles.google}>
          <img src={GoogleLogo} alt="Google Logo" />
          Google
        </div>
      </button>
    </div>
  );
}

export default Login;
