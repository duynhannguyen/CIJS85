import { useContext } from "react";
import MyStoreContext from "../contexts/MyStoreContext";
import ThemeContext from "../contexts/ThemeContext/ThemeContext";

const Room = () => {
  const roomStore = useContext(MyStoreContext);
  const {theme} = useContext(ThemeContext);
  console.log(theme);
  const className = theme === "light" ? "box" : "box-dark"
  console.log("class",className);
  return <p className={className}>{roomStore.message}</p>;
};
export default Room;
 