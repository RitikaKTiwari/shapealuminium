import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./ContactUs.css";
import paper12 from "../Images/shape-slide-2.jpg";

const ContactUs = ({ changePage }) => {
  const [messageSent, setMessageSent] = useState(false);
  const [emailInitiatedAt, setEmailInitiatedAt] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { fullName, email, phone, message } = formData;
    const newErrors = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email is not valid.";
    }

    if (phone.trim() && !/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone must be of 10 digits.";
    }

    if (!message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const generateMailtoLink = () => {
    const { fullName, email, phone, message } = formData;
    return `mailto:harmishsanghani@gmail.com?subject=Inquiry from ${fullName}&body=Name: ${fullName}%0APhone: ${phone}%0AMessage: ${message}`;
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    const mailtoLink = generateMailtoLink();
    const newWindow = window.open(mailtoLink, "_blank");
    if (newWindow) {
      setEmailInitiatedAt(Date.now());
    } else {
      alert("Pop-up blocked! Please allow pop-ups and try again.");
    }
  };

  useEffect(() => {
    const handleReturnToPage = () => {
      if (
        emailInitiatedAt &&
        Date.now() - emailInitiatedAt >= 3000
      ) {
        setMessageSent(true);
        setEmailInitiatedAt(null);

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);

        setTimeout(() => {
          setMessageSent(false);
        }, 5000);
      }
    };

    window.addEventListener("focus", handleReturnToPage);
    document.addEventListener("visibilitychange", handleReturnToPage);

    return () => {
      window.removeEventListener("focus", handleReturnToPage);
      document.removeEventListener("visibilitychange", handleReturnToPage);
    };
  }, [emailInitiatedAt]);

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us | Shape Aluminium</title>
        <meta
          name="description"
          content="Contact Shape Aluminium for inquiries about our products and services. Located in Goregaon East, Mumbai and Surat. Reach us by phone or email."
        />
        <meta
          name="keywords"
          content="Shape Aluminium, Contact, Mumbai, Surat, Paper Products"
        />
        <meta property="og:title" content="Contact Us | Shape Aluminium Pvt Limited" />
        <meta
          property="og:description"
          content="Get in touch with Shape Aluminium. Find our address, phone number, and email here."
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="cont-hero-section">
        <img src={paper12} alt="Paper Rolls" className="cont-hero-image" />
        <div className="cont-hero-overlay">
          <h1>Contact Us</h1>
          <div style={{ flexDirection: "row", display: "flex", gap: "3px" }}>
            <p onClick={() => changePage("home")} className="cont-hero-overlay-div-p">
              Home
            </p>
            <p>&gt; Contact Us</p>
          </div>
        </div>
      </div>

      <div className="contact-container">
        {messageSent && (
          <div className="cont-contact-popup">Inquiry sent successfully!</div>
        )}

        <form className="contact-form">
          <h2>Have a Question? Let Us Know</h2>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="tel"
            name="phone"
            maxLength={10}
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <textarea
            name="message"
            placeholder="Write a Comment"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="button" onClick={handleButtonClick}>
            SEND MESSAGE
          </button>
        </form>

        <div className="contact-info">
          <h2>Get in touch</h2>
          <p><strong>ADDRESS</strong></p>
          <a href="https://maps.app.goo.gl/Seeq2zMxpdaXE4CXA">➡️ Shape Aluminium</a>
          <p>📍 333, Time Trade Center, Puna-Simada – Vesu Canal Road, Opposite Polaris Mall, – Punagam, Surat, Gujarat 395010.</p>
          <p>
            <strong>Email :</strong>{" "}
            <a href="mailto:sanghaniashish007@gmail.com">📧 sanghaniashish007@gmail.com</a>
          </p>
          <p>
            <strong>Phone :</strong>{" "}
            <a href="tel:+918128511262">📞 +91 81285-11262</a>
          </p>
          {/* <p>
            <strong>Telephone number :</strong>{" "}
            <a href="tel:+912247509425">☎️ +91 22 4750 9425</a>
          </p> */}

          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=21.175030,72.826394&z=17&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
