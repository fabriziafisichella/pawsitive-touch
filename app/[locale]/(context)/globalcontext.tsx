"use client";
import { createContext, useState } from "react";

const initialContext = {
    logged: false,
    setIsLogged: (value: boolean) => {},
};

export const globalContext = createContext(initialContext);

const Context = ({ children }: { children: any }) => {
  const [logged, setIsLogged] = useState(false);


  const value = {
      logged,
      setIsLogged
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export default Context;
