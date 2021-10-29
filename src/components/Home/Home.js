import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import ChooseUs from '../ChooseUs/ChooseUs';
import Articles from '../Articles/Articles';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <ChooseUs></ChooseUs>
            <Articles></Articles>
        </div>
    );
};

export default Home;