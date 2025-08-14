import React from "react";
import { Helmet } from "react-helmet";  // Import React Helmet
import "./Footer.css";

const Footer = ({ changePage }) => {
  const handleNavigation = (page) => {
    changePage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="foot-box">
      <Helmet>
        <title>Shape Aluminium</title>
        <meta name="description" content="Footer section of Shape Aluminium website. Get in touch with us through our contact information and office locations." />
        <meta name="keywords" content="Shape Aluminium, contact, privacy policy, footer, offices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="FooterContainer">
        <div className="Row-foot">

          <div className="Column-foot">
            <div className="Heading" onClick={() => handleNavigation("about")}>About Us</div>
            <span className="FooterLink" onClick={() => handleNavigation("about")}>Who We Are</span>
            <span className="FooterLink" onClick={() => handleNavigation("contact")}>Contact Us</span>
          </div>

          <div className="Column-foot">
            <div className="Heading">Our Office</div>
              <div className="AddressWrapper">
                <div className="FooterAddress">
                  <span className="address-line">333, Time Trade Center, Puna-Simada</span><br />
                  <span className="address-line">Vesu Canal Road, Opposite Polaris Mall,</span><br />
                  <span className="address-line">Punagam, Surat, Gujarat 395010.</span><br />
                  <span className="address-line">
                    <a href="tel:+918128511262" className="FooterLink">📞 +91 81285-11262</a>
                  </span>
                </div>
              </div>
            </div>



          <div className="Column-foot">
            <div className="Heading" onClick={() => handleNavigation("privacypolicy")}>Privacy & Legal</div>
            <span className="FooterLink" onClick={() => handleNavigation("privacypolicy")}>Privacy Policy</span>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Shape Aluminium. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
