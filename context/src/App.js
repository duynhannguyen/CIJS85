import "./App.css";
import { createContext, useContext, useState } from "react";
import House from "./components/House";
import MyStoreContext from "./contexts/MyStoreContext";
import ThemeContext from "./contexts/ThemeContext/ThemeContext";
import SwitchTheme from "./components/SwitchTheme";

function App() {
  const MessageValue = "Nội thất";
  const [themeOption, setThemeOption] = useState("light")
  return (
    <MyStoreContext.Provider value={{ message: MessageValue }}>
      <ThemeContext.Provider value = {{
        theme: themeOption,
        setThemeOption,
      }}>

      <div>
        <SwitchTheme/>
        <House />
      </div>
      </ThemeContext.Provider>
    </MyStoreContext.Provider>
  );
}

export default App;
