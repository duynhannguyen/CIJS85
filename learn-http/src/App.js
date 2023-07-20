import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from './pages/Homepage/Homepage';
import LoginPage from './pages/LoginPage/LoginPage';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
