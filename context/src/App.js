import logo from "./logo.svg";
import "./App.css";

const Black = ({ message }) => {
  return <Blue message={message} />;
};
const Blue = ({ message }) => {
  return <Red message={message} />;
};
const Red = ({ message }) => {
  return <p> {message} </p>;
};

function App() {
  const message = "Hello world";
  return (
    <div className="App">
      <Black message={message} />
    </div>
  );
}

export default App;
