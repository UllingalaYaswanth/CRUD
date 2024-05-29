import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDK1ntF9gT8NUF3GHCeCIzvAVkOmYt7tBc",
    authDomain: "crud-5014a.firebaseapp.com",
    projectId: "crud-5014a",
    storageBucket: "crud-5014a.appspot.com",
    messagingSenderId: "730331881060",
    appId: "1:730331881060:web:80fbd0d1741f53b60dc971",
    measurementId: "G-K1Y9QB1S3R"
  };

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);