import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardSliding from "../Cards/CardSliding";
import ProductGrid from "../ProductGrid/ProductGrid";
import './Home.css';
import HomeProductDetails from "../ProductGrid/HomeProductDetails";

const Home = ({ changePage, showPhone }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isPaused = isModalOpen || showPhone;

    return (
        <div className="home-container">
            <Helmet>
                <title>Shape Aluminium | Home</title>
                <meta
                    name="description"
                    content="Welcome to Shape Aluminium – Your reliable partner for premium aluminium profiles, shutters, handles, and glass partition systems. Explore our wide range of modern and durable solutions."
                />
                <meta
                    name="keywords"
                    content="Shape Aluminium, aluminium profiles, shutter profiles, G profile, handle profile, glass partitions, frame systems, interior aluminium fittings"
                />
                <meta name="author" content="Shape Aluminium" />
                <meta property="og:title" content="Shape Aluminium | Premium Aluminium Profiles & Systems" />
                <meta
                    property="og:description"
                    content="Discover high-quality aluminium products at Shape Aluminium. Trusted for excellence in design, durability, and modern architectural solutions."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>


            <main className="home-content">
                <CardSliding isPaused={isPaused} />
                <ProductGrid setIsModalOpen={setIsModalOpen} changePage={changePage} />
                <HomeProductDetails changePage={changePage} />
            </main>
        </div>
    );
};

export default Home;
