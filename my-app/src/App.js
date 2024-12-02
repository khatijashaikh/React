import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import UseState from './components/DAY-3/usestate';
import UseStateTwo from './components/DAY-5/usestate2';
import UseReducer from './components/DAY-9/useReducer';
import DynamicCSS from './components/DAY-9/DynamicCss';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/use-reducer' element={<UseReducer />} />
      <Route path='/dynamic-css' element={<DynamicCSS />} />
      <Route path='/register' element={<Register />} />
      <Route path='/usestate' element={<UseState />} />
      <Route path='/usestatetwo' element={<UseStateTwo />} />
    </Routes>
    </div>
  );
}

export default App;
