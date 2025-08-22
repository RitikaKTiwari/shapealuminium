import React from "react";
import { Helmet } from "react-helmet";
import "./HomeProductDetails.css";
import shutter from "../Images/aluminium-shutter-profile-1.jpg";
import handle68 from "../Images/68mm-handle-profile-2.jpg";
import frame45 from "../Images/45mm-frame-profile-4.jpg";
import gprofile from "../Images/G-profile-1.jpg";
import glass from "../Images/Glass-partition-9.png";

const products = {
    "shutter-profile": {
        title: "Aluminium Shutter Profile",
        description: "Aluminium Shutter Profile is a premium-grade framing solution used in modern furniture, kitchen cabinets, wardrobes, and display units. Known for its sleek design, corrosion resistance, and lightweight strength, it provides both structural integrity and an elegant finish to shutter panels.",
        details: "High-quality aluminium alloy, Rust-proof and corrosion-resistant, Lightweight yet strong, Sleek and modern appearance, Smooth surface for easy cleaning, Resistant to bending and deformation, Available in various finishes such as matte, brushed, or anodized, Easy to cut and assemble, Long-lasting performance. Aluminium Shutter Profiles are widely used in modular kitchens, wardrobes, showcases, and office furniture to enhance durability, functionality, and visual appeal.",
        images: shutter
    },
    "68mm-handle-profile": {
        title: "68mm Handle Profile",
        description: "68mm Handle Profile is a stylish and functional aluminium profile designed for use in kitchen cabinets, wardrobes, drawers, and other modular furniture. It provides a comfortable grip, a sleek appearance, and long-lasting durability, making it an ideal choice for modern interiors.",
        details: "Made from premium-grade aluminium, corrosion and rust resistant, Lightweight yet strong, Ergonomically designed for comfortable handling, Sleek and modern finish, Available in multiple colors and anodized finishes, Easy to install and maintain, Scratch and wear resistant. The 68mm Handle Profile is commonly used in residential and commercial furniture to add both functionality and aesthetic appeal, ensuring smooth operation and a refined look.",
        images: handle68
    },
    "45mm-frame-profile": {
        title: "45mm Frame Profile",
        description: "45mm Frame Profile Aluminium is built for structural support and elegant framing in cabinet doors, wardrobe shutters, and display units. Unlike handle profiles, it focuses on holding panels securely while maintaining a refined, minimal border look.",
        details: "Strong 45mm frame width for stability, Precision-engineered aluminium alloy, Rust-proof and corrosion-resistant, Compatible with glass, acrylic, and panel inserts, Lightweight yet rigid construction, Smooth surface for easy cleaning, Resists bending and deformation, Available in matte, brushed, or anodized finishes, Easy to cut and assemble, Designed for long-term structural performance.",
        images: frame45
    },
    "g-profile": {
        title: "G Profile",
        description: "G Profile is a sleek and functional profile used in modern modular furniture, particularly for kitchen shutters, wardrobes, and cabinets. Designed to provide an easy grip and a stylish finish, it combines durability with a contemporary look for high-end interior applications.",
        details: "Manufactured from premium-grade aluminium alloy, Rust-proof and corrosion-resistant, Ergonomic 'G' shaped design for comfortable grip, Lightweight yet strong, Smooth surface for easy cleaning, Resistant to bending, scratches, and wear, Available in various finishes such as matte, brushed, or anodized, Easy to cut and install, Long-lasting performance. G Profile Aluminium is widely used in modular kitchens, wardrobes, and storage solutions to enhance functionality, aesthetics, and durability.",
        images: gprofile
    },
    "glass-partition-profile": {
        title: "Glass Partition Profile",
        description: "Glass Partition Profile is a precision-engineered framing solution designed to securely hold and support glass panels in office partitions, shower enclosures, display units, and modern interior dividers. It offers a clean, minimal look while ensuring the strength and stability of the glass installation.",
        details: "Made from premium-grade aluminium alloy, Rust-proof and corrosion-resistant, Designed for secure glass fitting, Sleek and minimal profile for modern interiors, Compatible with various glass thicknesses, Lightweight yet structurally strong, Smooth surface for easy cleaning, Resistant to bending and deformation, Available in anodized, matte, and brushed finishes, Easy to cut and install. Ideal for residential, commercial, and industrial glass partition applications.",
        images: glass
    }
};

const HomeProductDetails = ({ changePage }) => {
    const handleClick = (productKey) => {
        changePage(`products/${productKey}`, productKey);
        window.scrollTo(0, 0);
    };

    return (
        <div className="homepage-detail-wrapper">
            <Helmet>
                <title>Our Aluminium Products | Shape Aluminium</title>
                <meta
                    name="description"
                    content="Explore Shape Aluminium’ premium aluminium products designed for unmatched strength including Aluminium Shutter Profile, 68mm Handle Profile, G Profile, 45mm Frame Profile, and Glass Partition Profile."
                />
                <meta
                    name="keywords"
                    content="Kappa Board, Black Paper, PU Covering, PVC Covering, Fine Paper, Color Paper, Shape Aluminium, Packaging Materials"
                />
                <meta property="og:title" content="Explore Premium Products | Shape Aluminium" />
                <meta
                    property="og:description"
                    content="Discover our wide range of high-quality paper and covering materials used in packaging, arts, fashion, and more."
                />
                <meta property="og:type" content="website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            {Object.entries(products).map(([key, product], index) => (
                <div
                    key={key}
                    onClick={() => handleClick(key)}
                    className={`homepage-detail-product-row ${index % 2 === 1 ? "homepage-detail-reverse" : ""}`}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="homepage-detail-product-image-wrapper">
                        <img src={product.images} alt={product.title} />
                    </div>
                    <div className="homepage-detail-product-text">
                        <h2>{product.title}</h2>
                        <p className="homepage-detail-product-desc">{product.description}</p>
                        <p className="homepage-detail-product-details">{product.details}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomeProductDetails;
