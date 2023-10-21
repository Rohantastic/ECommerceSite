import { createContext, useState } from 'react';

const AuthContext = createContext({
  token: '',
  userId: '',
  email: '',
  login: (token, userId, email) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');

  const loginHandler = (token, userId, userEmail) => {
    setToken(token);
    setUserId(userId);
    setEmail(userEmail);
  };

  const logoutHandler = () => {
    setToken('');
    setUserId('');
    setEmail('');
  };

  const contextValue = {
    token: token,
    userId: userId,
    email: email,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
