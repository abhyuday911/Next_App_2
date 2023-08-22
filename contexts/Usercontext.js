"use client";
import React, { createContext, useState } from "react";

export const User = createContext(null);

const Usercontext = ({ children }) => {
  const [names, setnames] = useState([
    { name: "zack", age: 60, dead: false },
    { name: "zack", age: 60, dead: false },
  ]);
  return <User.Provider value={[names, setnames]}>{children}</User.Provider>;
};

export default Usercontext;
