import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCK1PMVTt2UWR_pedDTRsUfHDZ4hg8NNVA",
  authDomain: "clone-52b25.firebaseapp.com",
  projectId: "clone-52b25",
  storageBucket: "clone-52b25.appspot.com",
  messagingSenderId: "541120594848",
  appId: "1:541120594848:web:b1d90743c017f5dfa01ac5",
  measurementId: "G-TLQ17EC99G",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
