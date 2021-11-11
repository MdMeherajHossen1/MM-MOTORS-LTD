import React from 'react';
import Navigation from '../../Sharedpage/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../../Sharedpage/Footer/Footer'
import Cars from '../Cars/Cars';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Cars></Cars>
            <Footer></Footer>
        </div>
    );
};

export default Home;