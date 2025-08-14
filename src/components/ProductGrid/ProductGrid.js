import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./samplegrid.css";
import p1 from "../Images/aluminium-shutter-profile-8.jpg";
import p2 from "../Images/68mm-handle-profile-1.jpg";
import p3 from "../Images/45mm-frame-profile-1.png";
import p4 from "../Images/G-profile-6.jpg";
import p5 from "../Images/Glass-partition-5.webp";


const products = [
  {
    id: 1,
    title: "Aluminium Shutter Profile",
    description: "Durable aluminium profile for stylish and long-lasting shutter panels.",
    image: p1,
  },
  {
    id: 2,
    title: "G Profile",
    description: "Premium PVC covering materials for diverse applications.",
    image: p4,
  },
  {
    id: 5,
    title: "68mm Handle Profile",
    description: "Ergonomic aluminium handle profile offering comfort, strength, and modern style.",
    image: p2,
  },
  {
    id: 3,
    title: "Glass Partition Profile",
    description: "Sleek aluminium profile for secure and stylish glass partitions.",
    image: p5,
  },
  {
    id: 4,
    title: "45mm Frame Profile",
    description: "Strong aluminium frame profile for sturdy and elegant panel support.",
    image: p3,
  }
];

const ProductCard = ({ product, onClick, changePage }) => {
  const handleDetailsClick = (e) => {
    e.stopPropagation();
    if (typeof changePage === "function") {
      changePage(`product/${product.id}`, product.id);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <Helmet>
        <title>Our Products | Shape Aluminium</title>
        <meta
          name="description"
          content="Explore a wide range of premium products from Shape Aluminium including Kappa Board, PVC Covering, Black Paper, PU Covering, and more."
        />
        <meta
          name="keywords"
          content="Kappa Board, PVC Covering, PU Covering, Black Paper, Color Paper, Shape Aluminium Products"
        />
        <meta property="og:title" content="Our Products | Shape Aluminium" />
        <meta
          property="og:description"
          content="Discover our high-quality packaging materials and papers at Shape Aluminium."
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div
        className="product-image"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <div className="product-overlay">
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-description">{product.description}</p>
          <button className="more-details" onClick={handleDetailsClick}>
            More Details →
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = ({ setIsModalOpen, changePage }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="our-product-title">
        <p>Our Products</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onClick={openModal} changePage={changePage} />
        ))}
      </div>

      {selectedProduct && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedProduct.image} alt={selectedProduct.title} className="modal-image" />
            <h3>{selectedProduct.title}</h3>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
