import React from 'react';
import Footer from './footer';

const MainLayout = ({ children }) => {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;