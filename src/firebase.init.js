import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// console.log(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;




//  import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBv0kzPaExcZzfunjgk_4ZtnE3KVzKE6Po",
//   authDomain: "manufacturing-website.firebaseapp.com",
//   projectId: "manufacturing-website",
//   storageBucket: "manufacturing-website.appspot.com",
//   messagingSenderId: "219978470505",
//   appId: "1:219978470505:web:eb9bb5c4b3be736620fef8"
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// export default auth;
