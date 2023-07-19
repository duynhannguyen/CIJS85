import { useContext } from "react";
import MyStoreContext from "../contexts/MyStoreContext";

const Room = () => {
  const roomStore = useContext(MyStoreContext);
  return <p>{roomStore.message}</p>;
};
export default Room;
