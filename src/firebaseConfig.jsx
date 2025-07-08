
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBKgB36JbQlKd_apNMe4o7u23c06cODLaY",
  authDomain: "webserver-a4854.firebaseapp.com",
  projectId: "webserver-a4854",
  storageBucket: "webserver-a4854.firebasestorage.app",
  messagingSenderId: "153763231872",
  appId: "1:153763231872:web:4a8d9b22c195ed47124e65"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)