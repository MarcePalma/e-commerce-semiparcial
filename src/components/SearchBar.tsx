import { SearchBarIcon } from '@/utils/Icons';
import React, { useState } from 'react';

function SearchBar() {
    const [isSearchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };

    return (
        <div className="relative">
            <label htmlFor="Search" className={`sr-only ${isSearchVisible ? 'hidden' : ''}`}>
                Buscar
            </label>

            <input
                type="text"
                id="Search"
                placeholder="Buscar Productos..."
                className={`w-full rounded-md border-gray-200 py-2.5 px-4 pe-10 shadow-sm sm:text-sm transition-all ${isSearchVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                    type="button"
                    className="text-gray-600 hover:text-gray-700"
                    onClick={toggleSearch}
                >
                    <span className="sr-only">Buscar</span>
                    <SearchBarIcon />
                </button>
            </span>
        </div>
    );
}


export default SearchBar;
