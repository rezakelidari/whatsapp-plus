import firebase from "firebase/compat/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "@firebase/auth";
import "firebase/auth";

const Initialize = firebase.initializeApp({
  apiKey: "AIzaSyCpwHXOCIzsThY4vgfHpduWorzBn6hoy-4",
  authDomain: "whatsapp-plus-3abfd.firebaseapp.com",
  projectId: "whatsapp-plus-3abfd",
  storageBucket: "whatsapp-plus-3abfd.appspot.com",
  messagingSenderId: "614803155347",
  appId: "1:614803155347:web:d8451d9740a57c546d2066",
});

const auth = getAuth(Initialize);

async function Authenticate(navigate) {
  const provider = new GoogleAuthProvider();
  auth.languageCode = "fa";

  await signInWithPopup(auth, provider)
    .then(() => {
      navigate("/chats");
    })
    .catch((error) => {
      console.log(error);
    });
}

function SignOut(navigate) {
  signOut(auth)
    .then(() => {
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
}

export { auth, Authenticate, SignOut };
