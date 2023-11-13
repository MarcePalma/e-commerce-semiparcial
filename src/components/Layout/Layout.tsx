import React, { ReactNode } from 'react';
import NavBar from '../Nav/navBar';
import Header from '../Header/Header';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <section>
            <NavBar />
            <Header />
            {children}
        </section>
    );
};

export default Layout;
