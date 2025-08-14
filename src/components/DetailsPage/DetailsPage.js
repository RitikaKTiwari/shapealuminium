import React from "react";
import { Helmet } from "react-helmet"; // Import React Helmet
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";
import "./DetailsPage.css";
import p1 from "../Images/aluminium-shutter-profile-7.jpg";
import p2 from "../Images/68mm-handle-profile-3.jpg";
import p3 from "../Images/45mm-frame-profile-3.jpg";
import p4 from "../Images/Glass-partition-2.jpg";
import p5 from "../Images/shape-slide-5.jpg";

const products = [
  {
    id: 1, title: "Aluminium Shutter Profile",
    details: "Aluminium Shutter Profile is a premium-quality solution used in modern modular kitchens and furniture systems.",
    description: [
      "Features: Sleek Design, High Durability, Corrosion Resistant, Lightweight, and Easy to Install.",
      "Ideal for creating frameless cabinet shutters with a stylish and contemporary finish.",
      "Where our Aluminium Shutter Profiles can be used: Modular Kitchen Cabinets, Wardrobes, Office Furniture, Bathroom Vanities, Display Units, and Interior Partitions."
    ],
    image: p1
  },
  {
    id: 3,
    title: "Glass Partition Profile",
    details: "Glass Partition Profiles are designed to offer sleek, durable, and modern solutions for glass-based room dividers and office partitions.",
    description: [
      "Features: Slim Design, Sturdy Aluminium Frame, Easy Glass Fitting, Rust-Proof Coating, and Modern Finish.",
      "Supports clear, frosted, or tinted glass and enables hassle-free installation in both residential and commercial spaces.",
      "Where our Glass Partition Profiles can be used: Office Cabins, Conference Rooms, Residential Room Dividers, Showrooms, and Commercial Interiors."],
    image: p4
  },
  {
    id: 2,
    title: "G Profile",
    details: "G Profile is a stylish and functional handle solution designed for seamless integration into modern kitchen shutters and cabinets.",
    description: [
      "Features: Sleek G-shaped grip, Smooth Finish, Rust-Free, Durable, and Easy to Maintain.",
    "Eliminates the need for external handles, offering a minimalist and clean look to kitchen designs.",
    "Where our Aluminium G Profiles can be used: Modular Kitchen Shutters, Wardrobe Doors, Cabinet Drawers, Office Furniture, and Contemporary Interior Designs."],
    image: p5
  },
  {
    id: 4,
    title: "45mm Frame Profile",
    details: "The 45mm Frame Profile is a strong and versatile solution designed for structural support in modular kitchen shutters and furniture panels.",
    description: [
      "Features: Sturdy 45mm Width, High Load Capacity, Smooth Anodized Finish, Corrosion Resistant, and Easy to Assemble.",
      "Ideal for framing glass or solid panels, offering both strength and a refined appearance in modern interiors.",
      "Where our 45mm Frame Profiles can be used: Kitchen Shutter Frames, Glass Cabinet Doors, Display Units, Wardrobes, and Office Furniture."],
    image: p3
  },
  {
    id: 5,
    title: "68mm Handle Profile",
    details: "The 68mm Handle Profile is a robust and modern handle solution, ideal for heavy-duty kitchen shutters and wardrobe panels.",
    description: [
      "Features: Wide 68mm Grip, Premium Anodized Finish, High Strength, Easy Installation, and Long-lasting Durability.",
      "Provides a comfortable grip and a seamless integrated handle look for modular furniture.",
      "Where our 68mm Handle Profiles can be used: Kitchen Cabinet Shutters, Tall Units, Wardrobes, Bathroom Cabinets, and Premium Furniture Designs."],
    image: p2
  }
];

const DetailsPage = ({ productId, changePage }) => {
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details-container1">
      {/* Adding React Helmet */}
      <Helmet>
        <title>{product.title} | Shape Aluminium</title>
        <meta name="description" content={product.details} />
        <meta name="keywords" content={`${product.title}, ${product.details}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <button className="back-button-a" onClick={() => { changePage("home"); window.scrollTo(0, 0) }}>
        <FaArrowLeft />
      </button>

      <img src={product.image} alt={product.title} className="product-image1" />

      <div className="product-info1">
        <h2>{product.title}</h2>
        <p>{product.details}</p>
        <ul>
          {product.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <a href="tel:+918128511262" className="product-info1-contact-button1">
          <FaPhoneAlt /> Contact Us
        </a>
      </div>
    </div>
  );
};

export default DetailsPage;
