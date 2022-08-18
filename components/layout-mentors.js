import React from 'react';
import Head from 'next/head';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const LayoutMentors = ({ children }) => {
    return (
        <>
            <Head>
                <title>Mentors</title>
            </Head>
            <>
                <Navbar />
                {children}
                <Footer />
            </>
        </>
    );
};
export default LayoutMentors;