import firebase from "firebase/compat/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "@firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCpwHXOCIzsThY4vgfHpduWorzBn6hoy-4",
  authDomain: "whatsapp-plus-3abfd.firebaseapp.com",
  projectId: "whatsapp-plus-3abfd",
  storageBucket: "whatsapp-plus-3abfd.appspot.com",
  messagingSenderId: "614803155347",
  appId: "1:614803155347:web:d8451d9740a57c546d2066",
  measurementId: "G-L7ZD1Z9T57",
};

const Initialize = firebase.initializeApp(config);

const auth = getAuth(Initialize);
const analytics = getAnalytics(Initialize);

async function Authenticate(navigate) {
  const provider = new GoogleAuthProvider();
  auth.languageCode = "fa";

  await signInWithPopup(auth, provider)
    .then((result) => {
      logEvent(analytics, `User ${result.user.email} logged in`);
      navigate("/chats");
    })
    .catch((error) => {
      console.log(error);
    });
}

function SignOut(navigate) {
  logEvent(analytics, `User ${auth.currentUser.email} logging out`);
  signOut(auth)
    .then(() => {
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
}

export { auth, Authenticate, SignOut };
