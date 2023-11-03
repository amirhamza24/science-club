// import React from 'react';

import About from "../About/About";
import Banner from "../Banner/Banner";
import Committee from "../Committee/Committee";
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
            <Committee></Committee>
            <Contact></Contact>
        </div>
    );
};

export default Home;