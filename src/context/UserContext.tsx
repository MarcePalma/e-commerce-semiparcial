import React, { createContext, useContext, useState } from 'react';
import { User, UserContextProps, UserProviderProps } from '@/types/component.types';

export const UserContext = createContext<UserContextProps>({ user: {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
  token: '',
  authorized: false
}, setUser: () => {} });

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    token: "",
    authorized: false,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
