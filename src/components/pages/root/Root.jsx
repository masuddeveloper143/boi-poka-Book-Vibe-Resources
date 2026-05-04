import React from 'react';
import Navbar from '../../navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../footer/Footer';
import Banner from '../../Banner/Banner';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            

        </div>
    );
};

export default Root;