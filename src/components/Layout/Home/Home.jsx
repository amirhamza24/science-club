// import React from 'react';

import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Events from "../Events/Events";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Events></Events>
            <Gallery></Gallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;