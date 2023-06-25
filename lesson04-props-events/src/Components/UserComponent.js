import { useState } from "react";

const UserComponent = () => {
  const [user, setUser] = useState({
    name: "Leo Messi",
    age: 37,
    club: "NaN",
  });
  const onIncreaseAgeHandler = () => {
    setUser({...user, 
        age: user.age +1});
  };
  return (
    <div>
      <h3>
        Name: {user.name}
      </h3>
      <p>
        age: {user.age}
      </p>
      <p>
      club: {user.club}
      </p>
    <button onClick={onIncreaseAgeHandler}> Click me!</button>
    </div>
  );
};
export default UserComponent;
