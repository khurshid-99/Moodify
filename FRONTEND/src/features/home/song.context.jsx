import { createContext, useState } from "react";

export const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [loding, setLoding] = useState(false);
  const [song, setSong] = useState(null);

  return (
    <SongContext.Provider value={{ loding, setLoding, song, setSong }}>
      {children}
    </SongContext.Provider>
  );
};
