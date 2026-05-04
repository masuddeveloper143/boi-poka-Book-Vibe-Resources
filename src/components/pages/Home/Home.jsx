import React from 'react';
import Banner from '../../Banner/Banner';
import Bookss from '../Bookss';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Bookss data={data}></Bookss>

        </div>
    );
};

export default Home;