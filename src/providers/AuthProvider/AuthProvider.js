import React, { useState, useEffect } from "react";
import { auth } from "../../services/Firebase";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(window.location.pathname.split("/").pop());

  useEffect(() => {
    console.log("Update");
    auth.onAuthStateChanged((user) => {
      console.log();
      setLogin(user);
      setLoading(false);
    });
  }, [login, url]);

  return (
    <AuthContext.Provider value={login}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
