import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpWVoOZdKi9fe-e-bRT6G20XtqQgCfRhA",
  authDomain: "notes-e8ee2.firebaseapp.com",
  projectId: "notes-e8ee2",
  storageBucket: "notes-e8ee2.appspot.com",
  messagingSenderId: "483280315092",
  appId: "1:483280315092:web:e76766100be1ab7c161141",
  measurementId: "G-W5KHVDQ7J1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db