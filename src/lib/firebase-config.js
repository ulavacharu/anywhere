import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDsXFlfPDNdec7voVz1NId89Px0tGtOOCk",

  authDomain: "anywhere-b5385.firebaseapp.com",

  projectId: "anywhere-b5385",

  storageBucket: "anywhere-b5385.appspot.com",

  messagingSenderId: "869621616135",

  appId: "1:869621616135:web:45a5c3d8e2bca5e1b7a4a2"

};

const app = initializeApp(firebaseConfig);

 export const db= getFirestore(app);