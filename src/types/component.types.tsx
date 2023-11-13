import { Dispatch, SetStateAction, ReactNode } from 'react';

export interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
}

export interface ProductCardProps {
    product: Product;
}

export interface CategoryButtonProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  token: string;
  authorized: boolean;
}

export interface UserContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export interface UserProviderProps {
  children: ReactNode;
}
