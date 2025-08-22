import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { FaArrowLeft, FaPhoneAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./SubMenuItemDetails.css";
import glasspart1 from "../Images/Glass-partition-3.jpg";
import glasspart2 from "../Images/Glass-partition-8.jpg";
import glasspart3 from "../Images/Glass-partition-7.jpg";
import shutter1 from "../Images/aluminium-shutter-profile-1.jpg";
import shutter2 from "../Images/aluminium-shutter-profile-9.jpg";
import shutter3 from "../Images/aluminium-shutter-profile-2.jpg";
import handle681 from "../Images/68mm-handle-profile-5.jpg";
import handle682 from "../Images/68mm-handle-profile-6.jpg";
import handle683 from "../Images/68mm-handle-profile-4.png";
import frame451 from "../Images/45mm-frame-profile-7.jpg";
import frame452 from "../Images/45mm-frame-profile-2.png";
import frame453 from "../Images/45mm-frame-profile-6.jpg";
import gprofile1 from "../Images/G-profile-6.jpg";
import gprofile2 from "../Images/G-profile-3.jpg";
import gprofile3 from "../Images/G-profile-5.jpg";

const productData = {
  "shutter-profile": {
    title: "Aluminium Shutter Profile",
    description: "Premium-grade aluminium profile designed for sleek, durable, and stylish shutter panels in modular kitchens, wardrobes, and display units.",
    details: "Features: High-quality aluminium alloy, Rust-proof and corrosion-resistant, Lightweight yet strong, Sleek and modern design, Smooth surface for easy cleaning, Resistant to bending and deformation. Where our Aluminium Shutter Profile can be used: Modular kitchens, Wardrobes, Display units, Office furniture, Showcases, Storage cabinets, and Custom furniture projects. The Range of Aluminium Shutter Profiles we provide: Available in various sizes, shapes, and finishes including matte, brushed, and anodized. We can customize profiles as per your requirement to match specific design and installation needs.",
    images: [
      shutter1,
      shutter2,
      shutter3
    ]
  },
  "68mm-handle-profile": {
    title: "68mm Handle Profile",
    description: "Ergonomic aluminium handle profile offering comfort, strength, and modern style for cabinets, wardrobes, and drawers.",
    details: "Features: Wide 68mm ergonomic grip for comfortable use, Premium-grade aluminium alloy, Rust-proof and corrosion-resistant, Lightweight yet strong, Smooth surface for easy cleaning, Resistant to scratches and wear. Where our 68mm Handle Profile can be used: Modular kitchens, Wardrobes, Drawers, Office furniture, and Custom cabinetry. The Range of 68mm Handle Profiles we provide: Available in various colours, finishes, and lengths. Custom sizes and finishes can be provided as per project requirements.",
    images: [
      handle681,
      handle682,
      handle683
    ]
  },
  "45mm-frame-profile": {
    title: "45mm Frame Profile",
    description: "Strong aluminium frame profile for sturdy and elegant panel support in furniture and display applications.",
    details: "Features: Robust 45mm frame design for enhanced durability, Precision-engineered aluminium alloy, Rust-proof and corrosion-resistant, Compatible with glass, acrylic, and panels, Smooth surface for easy cleaning, Resistant to bending and deformation. Where our 45mm Frame Profile can be used: Kitchen shutters, Wardrobe doors, Display panels, and Custom furniture. The Range of 45mm Frame Profiles we provide: Available in various finishes including matte, brushed, and anodized, with size customization available.",
    images: [
      frame451,
      frame453,
      frame452
    ]
  },
  "g-profile": {
    title: "G Profile",
    description: "Stylish aluminium profile with a distinctive 'G' shape, designed for seamless grip and a refined look in modern furniture.",
    details: "Features: Unique ‘G’ shape for comfortable handling, High-quality aluminium alloy, Rust-proof and corrosion-resistant, Lightweight yet strong, Sleek and modern appearance, Resistant to bending and scratches. Where our G Profile can be used: Modular kitchens, Wardrobes, Cabinet shutters, and Display units. The Range of G Profiles we provide: Offered in matte, brushed, and anodized finishes, with multiple size options. Custom manufacturing available to suit specific furniture designs.",
    images: [
      gprofile1,
      gprofile2,
      gprofile3
    ]
  },
  "glass-partition-profile": {
    title: "Glass Partition Profile",
    description: "Sleek aluminium profile for secure and stylish glass partitions in offices, homes, and commercial interiors.",
    details: "Features: Made from premium-grade aluminium alloy, Rust-proof and corrosion-resistant, Designed for secure glass fitting, Compatible with various glass thicknesses, Sleek and minimal design, Lightweight yet strong. Where our Glass Partition Profile can be used: Office partitions, Shower enclosures, Display units, Interior dividers, and Shopfronts. The Range of Glass Partition Profiles we provide: Offered in multiple finishes such as matte, brushed, and anodized, with custom lengths and profiles available.",
    images: [
      glasspart1,
      glasspart2,
      glasspart3
    ]
  }
};

const SubMenuItemsDetails = ({ productName, changePage }) => {
  const imageScrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const isSmallScreen = () => window.innerWidth <= 768;

  const updateArrowVisibility = () => {
    const container = imageScrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setIsAtStart(scrollLeft <= 10);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
  };

  useEffect(() => {
    const container = imageScrollRef.current;
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (container) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      if (isSmallScreen()) {
        updateArrowVisibility();
        container.addEventListener("scroll", updateArrowVisibility);
        window.addEventListener("resize", updateArrowVisibility);
        return () => {
          container.removeEventListener("scroll", updateArrowVisibility);
          window.removeEventListener("resize", updateArrowVisibility);
        };
      }
    }
  }, [productName]);

  const scrollImages = (direction) => {
    const container = imageScrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth * 0.9;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  if (!productName) return <div>No Product Selected</div>;

  const formattedName = productName.toLowerCase().replace(/\s+/g, "-");
  const product = productData[formattedName];
  if (!product) return <div>Product not found.</div>;

  const formattedDetails = product.details.split(/;|\./).filter(d => d.trim() !== "");

  return (
    <div className="submenu-product-container">
      <Helmet>
        <title>{product.title} | Shape Aluminium</title>
        <meta
          name="description"
          content={`Explore details about ${product.title} at Shape Aluminium. ${product.description}`}
        />
        <meta
          name="keywords"
          content={`${product.title}, AUM Enterprises, Packaging Materials, Specialty Papers`}
        />
        <meta property="og:title" content={`${product.title} | Shape Aluminium`} />
        <meta
          property="og:description"
          content={`Learn more about ${product.title} – ${product.description}`}
        />
        <meta property="og:type" content="product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="submenu-image-section">
        {(!isSmallScreen() || !isAtStart) && (
          <button className="scroll-arrow left" onClick={() => scrollImages("left")}>
            <FaChevronLeft />
          </button>
        )}
        <div
          className={`submenu-image-scroll ${!isSmallScreen() ? "no-scroll" : ""}`}
          ref={imageScrollRef}
        >
          {product.images.map((img, index) => (
            <div key={index} className="submenu-image-wrapper">
              <img src={img} alt={`${product.title} ${index + 1}`} />
            </div>
          ))}
        </div>
        {(!isSmallScreen() || !isAtEnd) && (
          <button className="scroll-arrow right" onClick={() => scrollImages("right")}>
            <FaChevronRight />
          </button>
        )}
      </div>

      <div className="submenu-product-details">
        <button className="submenu-back-button-a" onClick={() => { changePage("home"); window.scrollTo(0, 0); }}>
          <FaArrowLeft /> Back
        </button>
        <h1>{product.title}</h1>
        <h3>{product.description}</h3>
        <ul className="submenu-product-extra">
          {formattedDetails.map((line, i) => (
            <li key={i}><p>{line.trim()}</p></li>
          ))}
        </ul>
        <a href="tel:+918128511262" className="submenu-contact-button1">
          <FaPhoneAlt /> Contact Us
        </a>
      </div>
    </div>
  );
};

export default SubMenuItemsDetails;
