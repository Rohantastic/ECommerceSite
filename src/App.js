import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Pages/Main';
import Cart from './components/Pages/Cart';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Contact_us from './components/Pages/Contact_us';
import Product_details from './components/Pages/Product_details';

function App() {
  return (
    <>
      
      <Router>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Main/>} exact/>
          <Route path='store/:id' element={<Product_details/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact_us/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/pds' element={<Product_details/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
