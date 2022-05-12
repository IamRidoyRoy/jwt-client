import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Inventory from './components/Inventory';
import Login from './components/Login';
import About from './components/About';
import Orders from './components/Orders';
import Headers from './components/Headers';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>

      </Routes>
    </div>
  );
}

export default App;
