import React from 'react';
import { Helmet } from "react-helmet";
import './PrivacyPolicy.css';
import { FaArrowLeft } from 'react-icons/fa';
import paper12 from "../Images/shape-slide-7.jpg";

const PrivacyPolicy = ({ changePage }) => {
  return (
    <div className="privacy-page">
      <Helmet>
        <title>Privacy Policy | Shape Aluminium</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Shape Aluminium to understand how we handle your personal information. We are committed to protecting your privacy."
        />
        <meta
          name="keywords"
          content="Privacy Policy, Shape Aluminium, Data Collection, User Privacy"
        />
        <meta property="og:title" content="Privacy Policy | Shape Aluminium Pvt Limited" />
        <meta
          property="og:description"
          content="View the privacy policy for Shape Aluminium regarding how we collect and handle personal data."
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="privacy-hero-section">
        <img src={paper12} alt="Background" className="privacy-hero-image" />
        <div className="privacy-hero-overlay">
          <h1>Privacy Policy</h1>
          <div style={{ flexDirection: "row", display: "flex", gap: "3px" }}>
            <p onClick={() => changePage("home")} className="cont-hero-overlay-div-p">
              Home
            </p>
            <p>&gt; Privacy Policy</p>
          </div>
        </div>
      </div>

      <div className="privacy-content">
        <button className="back-button-a" onClick={() => { changePage("home"); window.scrollTo(0, 0); }}>
          <FaArrowLeft />
        </button>

        <p className="updated-date"><em>Last updated: August 11, 2025</em></p>

        <p>We respect your privacy. This website is for informational purposes only. We do not collect, store, or share any personal information from our users.</p>

        <h2>Information We Collect</h2>
        <p><strong>We do not collect any personal data.</strong></p>

        <h2>Use of Information</h2>
        <p>Since we do not collect any information, there is no use of personal data in any form.</p>

        <h2>Cookies</h2>
        <p>Our website does not use cookies to track or collect any information.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update our Privacy Policy from time to time. Any changes will be updated on this page.</p>

        <h2>Copyright Notice</h2>
        <p>© 2025 Shape Aluminium. All rights reserved. No part of this website's content may be copied, reproduced, or distributed without explicit permission.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:sanghaniashish007@gmail.com">sanghaniashish007@gmail.com</a>.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
