import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { Helmet } from "react-helmet";
import "./Header.css";
import "@fontsource/eb-garamond";
import SubMenu from "../SubMenu/SubMenu";
import logo from "../Images/shape-logo.png";

const sampleItems = [
  { id: 1, title: "Aluminium Shutter Profile" },
  { id: 5, title: "68mm Handle Profile" },
  { id: 2, title: "G Profile" },
  { id: 4, title: "45mm Frame Profile" },
  { id: 3, title: "Glass Partition Profile" }
];

const Header = ({ changePage }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);

  const navRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }

      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (page, productName = null) => {
    let pageName = page.toLowerCase().replace(/\s+/g, "-");

    if (["home", "about", "contact"].includes(pageName)) {
      changePage(pageName);
    } else {
      changePage(`product/${pageName}`, productName.id);
    }

    setIsMenuOpen(false);
    setShowSearch(false);
    setSearchQuery(null);
    window.scrollTo(0, 0);
  };

  const handleNavigation1 = (page, productName = null) => {
    let pageName = page.toLowerCase().replace(/\s+/g, "-");

    if (["home", "about", "contact"].includes(pageName)) {
      changePage(pageName);
    } else {
      changePage(`products/${pageName}`, productName);
    }

    window.scrollTo(0, 0);
    setIsMenuOpen(false);
    setShowSearch(false);
  };

  return (
    <>
      <Helmet>
      <title>SHAPE ALUMINIUM | Home</title>
      <meta
        name="description"
        content="Discover SHAPE ALUMINIUM, your trusted source for aluminium shutter profiles, G profiles, handle profiles, glass partitions, and frame systems for modern interiors."
      />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Helmet>

      <header className="my-header">
        <div className="logo">
          <img src={logo} height={60} alt="Shape Aluminium" />
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <FaSearch className="search-icon mobile-only" onClick={() => setShowSearch(!showSearch)} />

        <nav className={`nav ${isMenuOpen ? "open" : ""}`} ref={navRef}>
          <a onClick={() => handleNavigation("home")} style={{ cursor: "pointer" }}>
            Home
          </a>

          <div
            className="products-menu"
            onMouseEnter={() => setIsProductsHovered(true)}
            onMouseLeave={() => setIsProductsHovered(false)}
          >
            <div className="menu-title" onClick={() => { setIsProductsHovered(!isProductsHovered) }}>
              <span style={{ fontWeight: 600 }}>Products</span>
              <FaChevronDown className={`chevron ${isProductsHovered ? "rotate" : ""}`} />
            </div>
            {isProductsHovered && (
              <SubMenu
                items={["Shutter Profile", "G Profile", "45mm Frame Profile", "68mm Handle Profile", "Glass Partition Profile"]}
                onItemClick={(item) => {
                  setIsProductsHovered(false);
                  setIsMenuOpen(false);
                  handleNavigation1(item, item);
                }}
              />
            )}
          </div>

          <a onClick={() => handleNavigation("about")} style={{ cursor: "pointer" }}>
            About Us
          </a>
          <a onClick={() => handleNavigation("contact")} style={{ cursor: "pointer" }}>
            Contact Us
          </a>
        </nav>

        <div className="header-actions">
          <FaSearch className="search-icon desktop-only" onClick={() => setShowSearch(!showSearch)} />

          {showSearch && (
            <div ref={searchRef} className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {searchQuery && (
                <div className="search-results-container">
                  <ul className="search-results">
                    {sampleItems.filter((item) =>
                      item.title.toLowerCase().includes(searchQuery.toLowerCase())
                    ).length > 0 ? (
                      sampleItems
                        .filter((item) =>
                          item.title.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((item) => <li
                          key={item.id}
                          onClick={() => handleNavigation("details", item)}
                          style={{ cursor: "pointer" }}
                        >
                          {item.title}
                        </li>)
                    ) : (
                      <li>No results found</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
