import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CartProvider from './components/contexts/CartContext';
import CartItemProvider from './components/contexts/CartItemContext';
import { AuthContextProvider } from './components/contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartItemProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CartItemProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
reportWebVitals();


