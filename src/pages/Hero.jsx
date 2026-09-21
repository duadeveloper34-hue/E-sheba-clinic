import { Link } from 'react-router-dom';
// import { useState } from 'react';
import Home from "../components/Home";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutUs from "../components/AboutUs";
import Application from "../components/Application";
import History from "../components/History";


function Hero() {

    return (
        <Link>
            <Home />
            <WhyChooseUs />
            <AboutUs />
            <Application />
            <History />
        </Link>
    );
}

export default Hero;