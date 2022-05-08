import React from 'react';
import AccountBanner from './AccountBanner/AccountBanner';
import Brand from './Brand/Brand';
import HomeInventory from './HomeInventory/HomeInventory';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Brand></Brand>
            <HomeInventory></HomeInventory>
            <AccountBanner></AccountBanner>
        </div>
    );
};

export default Home;