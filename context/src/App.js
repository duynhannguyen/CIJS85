import "./App.css";
import { createContext, useContext } from "react";
import House from "./components/House";
import MyStoreContext from "./contexts/MyStoreContext";

function App() {
  const MessageValue = "Nội thất";
  return (
    <MyStoreContext.Provider value={{ message: MessageValue }}>
      <div>
        <House />
      </div>
    </MyStoreContext.Provider>
  );
}

export default App;
