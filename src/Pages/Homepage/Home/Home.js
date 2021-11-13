import React from 'react';
import Navigation from '../../Sharedpage/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../../Sharedpage/Footer/Footer'
import Cars from '../Cars/Cars';
import Reviews from '../Reviews/Reviews';
import Joinus from '../Joinus/Joinus';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Cars></Cars>
            <Reviews></Reviews>
            <Joinus></Joinus>
            <Footer></Footer>
        </div>
    );
};

export default Home;