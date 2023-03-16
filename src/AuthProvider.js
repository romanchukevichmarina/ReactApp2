import React, { createContext, useState } from 'react';
export const AuthContext = createContext(null)
export const AuthProvider = ({children}) =>
{
  const [user, setUser] = useState(null)

  const login = (newUser, cb) => {
    setUser(newUser);
    cb();
  }
  const signout = (cb) => {
    setUser(null);
    cb();
  }
  const value = {user, login, signout}
  return (
    <AuthContext.Provider value = {value}>
      {children}
    </AuthContext.Provider>
  )
}