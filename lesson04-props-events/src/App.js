import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter.js';
import UserComponent from './Components/UserComponent.js'
function App() {
  return (
    <div className="App">
      <Counter/>
      <UserComponent/>
    </div>
  );
}

export default App;
