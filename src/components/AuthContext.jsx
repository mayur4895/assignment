// src/components/AuthContext.js
import { createContext } from 'react';

const AuthContext = createContext({
  IsLogedIn: true,
  setIsLoggedIn: () => {},
  IsSignIn: true,
  setIsSignIn: () => { setIsSignIn(!IsSignIn)},
});

export default AuthContext;
