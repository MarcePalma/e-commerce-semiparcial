"use client";
import { createContext, useState } from "react";

export const UserContext = createContext({} as any);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({
    nombre: "",
    apellido:"",
    edad: 0,
    email: "",
    password: "",
    authorized:""

  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}