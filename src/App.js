import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import SubMenuItemsDetails from "./components/SubMenu/SubMenuItemDetails";
import { FiPhoneCall } from "react-icons/fi";
import LoadingPage from "./components/LoadingPage/LoadingPage";

import "./App.css";
import "./components/Home/PhoneIconPortal.css";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPhone, setShowPhone] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const phoneRef = useRef(null);

  const changePage = (page, productName = null) => {
    setActivePage(page);
    if (productName !== null) {
      setSelectedProduct(productName);
    } else {
      setSelectedProduct(null);
    }
    window.history.pushState({ page, productName }, '', '#' + page);
  };

  const togglePhoneNumber = () => {
    setShowPhone((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (phoneRef.current && !phoneRef.current.contains(event.target)) {
        setShowPhone(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      window.history.replaceState({ page: activePage, productName: null }, '', '#' + activePage);
    }
  }, [isLoading]);

  useEffect(() => {
    const handlePopState = (event) => {
      const state = event.state;
      if (state) {
        setActivePage(state.page);
        setSelectedProduct(state.productName);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);



  return (
    <div className="app-container">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>AUM ENTERPRISES</title>
        <meta name="description" content="Premium paper and Boards products by AUM ENTERPRISES." />
      </Helmet>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Header changePage={changePage} />
          <main className="app-content">
            {activePage === "home" && <Home changePage={changePage} showPhone={showPhone} />}
            {activePage === "about" && <AboutUs changePage={changePage} />}
            {activePage === "contact" && <ContactUs changePage={changePage} />}
            {activePage === "privacypolicy" && <PrivacyPolicy changePage={changePage} />}
            {activePage.startsWith("products/") && (
              <SubMenuItemsDetails productName={selectedProduct} changePage={changePage} />
            )}
            {activePage.startsWith("product/") && (
              <DetailsPage changePage={changePage} productId={selectedProduct} />
            )}
          </main>
          <Footer changePage={changePage} />
        </>
      )}

      <div className="phone-icon-portal-container" ref={phoneRef}>
        <div className="phone-icon-portal-icon pulse" onClick={togglePhoneNumber}>
          <FiPhoneCall size={24} />
        </div>
        <div className={`phone-icon-portal-number ${showPhone ? 'show' : ''}`}>
          <a href="tel:+918128511262" className="phone-text">📞 +91 8128511262</a>
        </div>

      </div>
    </div>
  );
}

export default App;