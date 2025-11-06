import React from 'react';
import Navbar from './Navbar';
import Services from './Services';
import Hero from './Hero';
import Choose from './Choose';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Services></Services>
            <Choose></Choose>
        </div>
    );
};

export default Home;