import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  return (
    <AuthContext.Provider value={{ user, setUser, loding, setLoding }}>
      {children}
    </AuthContext.Provider>
  );
};