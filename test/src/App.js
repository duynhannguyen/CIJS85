import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBzrt3gJixp9zTcWDrpvL1B8pkMBackXAM",
    authDomain: "social-app-65c3b.firebaseapp.com",
    projectId: "social-app-65c3b",
    storageBucket: "social-app-65c3b.appspot.com",
    messagingSenderId: "1060503963049",
    appId: "1:1060503963049:web:cdbf188b4414536e49f0b8",
    measurementId: "G-C5WTEY9G5B",
  };
  initializeApp(firebaseConfig);
  const db = getFirestore();
  console.log("db", db);
  const colRef = collection(db, "testData");
  const docRef = doc(db, "testData", "yG0tBtMGaJDTuULsMwAx");
  //  lấy data từ Firebase
  getDocs(colRef)
    .then((snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ ...doc.data(), id: doc.id });
      });

      console.log("result", result);
    })
    .catch((err) => err.message);
  // update document by id
  // updateDoc(docRef, { userPhone: "123456789" });
  // thêm data vào collection
  // addDoc(colRef, { userPhone: 132456789 }, "yG0tBtMGaJDTuULsMwAx");
  // deleteDoc( "e51bTbVR7V7ZiuZnfhUq");
  // deleteDoc( "lPhlOb0vxoNFZxVW1Rlw");
  // deleteDoc( "mnHMeTjGppQadFA5R4FL");
  return (
    <div className="App">
      <h1> Test firebase</h1>
    </div>
  );
}

export default App;
