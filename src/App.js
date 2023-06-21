
import './App.css';
import SearchInput from './Components/SearchInput';
import TodolList from './Components/TodoList';
function App() {
  return (
    <div className="App">
      <div className = "wrapper">
      <SearchInput/>
      <TodolList/>
      </div>
    </div>
  );
}

export default App;
