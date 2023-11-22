import { Product, SearchContextProps, ExtendedSearchContextValue } from '@/types/component.types';
import React, { createContext, useContext } from 'react';



const SearchContext = createContext<ExtendedSearchContextValue | undefined>(undefined);

export const SearchProvider: React.FC<SearchContextProps> = ({ children }) => {
    const [searchResults, updateSearchResults] = React.useState<Product[]>([]);

  
    const contextValue: ExtendedSearchContextValue = {
        ...{ results: [] },
        searchResults,
        updateSearchResults,
    };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};