import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Pages/Main';
import Cart from './components/Pages/Cart';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Contact_us from './components/Pages/Contact_us';

function App() {
  return (
    <>
      
      <Router>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact_us/>}/>
          <Route path='/cart' element={<Cart/>}/>

        </Routes>
      </Router>
      
    </>
  );
}

export default App;
