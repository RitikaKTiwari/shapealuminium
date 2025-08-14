import React, { useEffect } from "react";
import "./AboutUs.css";
import paper1 from "../Images/Glass-partition-5.webp";
import paper2 from "../Images/aluminium-shutter-profile-8.jpg";
import paper3 from "../Images/G-profile-3.jpg"
import { Helmet } from "react-helmet";

const AboutUs = ({ changePage }) => {
  useEffect(() => {
    document.querySelector(".content")?.classList.add("animate");
    document.querySelector(".features")?.classList.add("animate");
    document.querySelector(".image-content")?.classList.add("visible");
  }, []);

  return (
    <div className="about-container">
      <Helmet>
        <title>About Us | Shape Aluminium</title>
        <meta
          name="description"
          content="Learn more about Shape Aluminium - a trusted supplier of high-quality aluminium products across India and globally, committed to excellence and sustainability."
        />
        <meta name="keywords" content="Shape Aluminium, Aluminium Supplier India, Aluminium Products, High-Quality Aluminium, Sustainable Aluminium Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="hero-section">
        <img src={paper1} alt="Paper Rolls" className="hero-image" />
        <div className="hero-overlay">
          <h1>About Us</h1>
          <div style={{ flexDirection: 'row', display: 'flex', gap: '3px' }}>
            <p onClick={() => changePage("home")} className="hero-overlay-div-p">Home</p>
            <p>&gt; About Us</p>
          </div>
        </div>
      </div>

      <section className="content">
        <div className="text-content">
          <h2>
            <span>Trusted Supplier Of Premium Aluminium Profiles</span>
          </h2>
          <p>
          Shape Aluminium is a trusted name in the aluminium industry, delivering high-quality
          kitchen profiles including G Profiles, Shutter Profiles, and more. With a focus on 
          precision, durability, and modern design, our products are crafted to enhance 
          every modular kitchen with style and functionality.
          </p>
          <button className="btn" onClick={() => changePage("home")}>Explore Our Products</button>
          <p className="contact">
            Call Us: <strong>+91 8128511262</strong>
          </p>
        </div>

        <div className="image-content">
          <div className="image-stack">
            <img src={paper3} alt="Paper Manufacturing" className="main-img bottom-img" />
            <img src={paper2} alt="Paper Rolls" className="main-img top-img" />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Premium Quality</h3>
          <p>Our profiles are crafted using top-grade aluminium, ensuring strength, corrosion resistance, and a sleek finish.</p>
        </div>
        <div className="feature">
          <h3>Modern & Functional Designs</h3>
          <p>Designed for modular kitchens, our G profiles, shutter profiles, and handle profiles blend aesthetics with functionality.</p>
        </div>
        <div className="feature">
          <h3>Custom Manufacturing</h3>
          <p>We offer tailored profile sizes, colors, and finishes to meet the specific needs of manufacturers, dealers, and designers.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;