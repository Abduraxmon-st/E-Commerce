import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [token, setToken] = useState(null);
   const [authenticated, setAuthenticated] = useState(false);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const savedToken = localStorage.getItem('token');
      if (savedToken) {
         setToken(savedToken);
         setAuthenticated(true);
      }
      setLoading(false);
   }, []);

   const login = (token) => {
      localStorage.setItem('token', token);
      setToken(token);
      setAuthenticated(true);
   };

   const logout = () => {
      localStorage.removeItem('token');
      setToken(null);
      setAuthenticated(false);
   };

   return (
      <AuthContext.Provider value={{ token, login, logout, authenticated, loading }}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
