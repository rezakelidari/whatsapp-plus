import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Styles from "./Chats.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";

import { ChatEngine } from "react-chat-engine";
import axios from "axios";

function Chats() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "03fc5243-3635-4507-a70b-b78e525eddcf",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then((result) => {
        setLoading(false);
        console.log(result);
      })
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);
        getImage(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formData, {
              headers: {
                "private-key": "5f45f795-77dc-41f7-8d66-5ec49dab177f",
              },
            })
            .then((response) => {
              setLoading(false);
            })
            .catch((error) => console.log(error));
        });
      });
  }, [user, navigate]);

  async function getImage(url) {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "avatar.jpg", { type: "image/jpeg" });
  }

  return (
    <>
      <Navbar />
      {!user || loading ? (
        <div className={Styles.chatsLoading}>Loading...</div>
      ) : (
        <div className={Styles.chatsMain}>
          <ChatEngine
            height="calc(100vh - 4rem)"
            projectID="03fc5243-3635-4507-a70b-b78e525eddcf"
            userName={user.email}
            userSecret={user.uid}
          />
        </div>
      )}
    </>
  );
}

export default Chats;
