import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Pages/Main';
import Cart from './components/Pages/Cart';
import About from './components/Pages/About';

function App() {
  return (
    <>
      
      <Router>
        <Routes>
          
          <Route path='/' element={<Main/>}/>
          <Route path='/store' element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>

        </Routes>
      </Router>
      
    </>
  );
}

export default App;
