import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import UseState from './components/DAY-3/usestate';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/usestate' element={<UseState />} />
    </Routes>
    </div>
  );
}

export default App;
