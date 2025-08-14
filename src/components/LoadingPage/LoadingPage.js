import React from "react";
import { Helmet } from "react-helmet";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <>
      <Helmet>
        <title>Loading | SHAPE ALUMINIUM</title>
        <meta name="description" content="Please wait while the page loads. SHAPE ALUMINIUM is preparing your experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="loading-overlay">
        <div className="loader">
          <div className="spinner"></div>
          <div className="brand-name">SHAPE ALUMINIUM</div>
        </div>
        <h2 className="loading-text">Loading...Please Wait</h2>
      </div>
    </>
  );
};

export default LoadingPage;