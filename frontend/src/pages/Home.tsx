import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Highlights from "../components/layout/Highlights";

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Highlights />
        </div>

    )
}

export default Home;