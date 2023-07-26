import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
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
  const colRef = collection(db, "testData");
  getDocs(colRef)
    .then((snapshot) => {
      let testData = [];
      snapshot.docs.forEach((doc) => {
        testData.push({ ...doc.data(), id: doc.id });
      });
      console.log(testData);
    })
    .catch((err) => {
      console.log(err.message);
    });
  addDoc(colRef, { userName: "Hồ Nguyễn Biển Ngọc" });
  return (
    <div className="App">
      <h1> Test firebase</h1>
    </div>
  );
}

export default App;
