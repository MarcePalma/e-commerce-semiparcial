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
  age: number;
  token?: string;
  authorized: boolean;
}

export interface UserContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export interface UserProviderProps {
  children: React.ReactNode;
}

export interface SearchBarProps {
  allProducts: Product[];
  onSearch: (filteredProducts: Product[]) => void;
}

export interface SearchContextValue {
  searchResults: Product[]
  updateSearchResults: Dispatch<SetStateAction<Product[]>>;
}

export interface SearchContextProps {
  children: ReactNode;
}

export interface ExtendedSearchContextValue extends SearchContextValue {
  searchResults: Product[];
}