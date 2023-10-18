import React, { useContext, useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import AuthContext from '../contexts/AuthContext';
import './Login.css';
import { Navigate, useNavigate } from 'react-router-dom';


const Login = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const navigateToStore=()=>{
    navigate("/store");
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const firebaseApiUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3QXuWLXotdtPsh5kedc-Bo3j283kD6T8';

    fetch(firebaseApiUrl, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        
        authCtx.login(data.idToken, data.localId);
        alert('Authentication successful!'); 
        navigateToStore();

      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
