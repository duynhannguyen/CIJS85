import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import PageNotFound from './pages/PageNotFound/PageNotFound';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='*' element= {<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
