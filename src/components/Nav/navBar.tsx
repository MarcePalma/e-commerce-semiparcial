import { useState } from 'react';
import Link from 'next/link';
import SearchBar from '../SearchBar/SearchBar';
import { BackIcon, CartIcon, DarkMode, LogoutIcon, SettingsIcon, UserIcon } from '@/utils/Icons';

export default function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <div className="flex justify-center items-center p-2">
            <div className="flex items-center">
                <div className="flex items-center space-x-4">
                    <SearchBar />
                </div>
            </div>
            <button onClick={toggleNavbar} className="text-gray-600">
                <SettingsIcon />
            </button>

            {navbarOpen && (
                <nav className="fixed top-0 right-0 h-screen w-30 bg-white p-2">
                    <div className="flex justify-end">
                        <button onClick={toggleNavbar} className="text-gray-600">
                            <BackIcon />
                        </button>
                    </div>

                    <div className="mt-4">
                        <ul className="mt-4 space-y-1">
                            <li>
                                <Link href="" className="flex items-center text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                    <UserIcon />
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="flex items-center text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                    <DarkMode />
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="flex items-center text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                    <CartIcon />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full border-t border-gray-100 p-2">
                        <form action="/logout">
                            <button type="submit" className="flex items-center text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                <LogoutIcon />
                            </button>
                        </form>
                    </div>
                </nav>
            )}
        </div>
    );
}
