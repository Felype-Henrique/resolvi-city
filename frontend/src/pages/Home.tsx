import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Highlights from "../components/layout/Highlights";
import Footer from "../components/layout/Footer";

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Highlights />
            <Footer />
        </div>

    )
}

export default Home;