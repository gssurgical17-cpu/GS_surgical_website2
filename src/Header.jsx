import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import GS_surgical from "./data/GS_surgical.jpeg";
import Trusted_seller from "./data/Trusted_seller.jpeg";

import hospitalFurniture from "./data/json/hospitalFurniture.json";

import "./Header.css";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearchTerm(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = hospitalFurniture.filter((product) =>
      product.name
        .toLowerCase()
        .includes(value.toLowerCase())
    );

    setSuggestions(filtered.slice(0, 6));
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);

    setSearchTerm("");
    setSuggestions([]);

    setSidebar(false);
  };

  return (
    <>
      {/* HEADER */}
      <header className="header">
        {/* LEFT SIDE */}
        <div className="header_left">
          {/* MENU BUTTON */}
          <button
            className="menu_btn"
            onClick={() => setSidebar(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* LOGO */}
          <img
            src={GS_surgical}
            alt="GS Surgical"
            className="logo"
          />

          {/* COMPANY INFO */}
          <div className="company_info">
            <h1>GS Surgical</h1>
            <p>GST No. 07PRTPK3417C1ZF</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="header_right">

  <div className="header_search">

    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearch}
    />

    {suggestions.length > 0 && (
      <div className="header_suggestions">

        {suggestions.map((product) => (
          <div
            key={product.id}
            className="header_suggestion_item"
            onClick={() => handleProductClick(product)}
          >
            <img
              src={`/images/${product.Image}`}
              alt={product.name}
            />

            <span>{product.name}</span>
          </div>
        ))}

      </div>
    )}

  </div>

  <img
    src={Trusted_seller}
    alt=""
    className="trusted_img"
  />

</div>
      </header>

      {/* OVERLAY */}
      <div
        className={`overlay ${
          sidebar ? "show_overlay" : ""
        }`}
        onClick={() => setSidebar(false)}
      ></div>

      {/* SIDEBAR */}
      <div
        className={`sidebar ${
          sidebar ? "show_sidebar" : ""
        }`}
      >
        {/* TOP */}
        <div className="sidebar_top">
          <img
            src={GS_surgical}
            alt="GS Surgical"
            className="sidebar_logo"
          />

          <div>
            <h2>GS Surgical</h2>
            <p>Medical Equipment</p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="search_box">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
          />

          {suggestions.length > 0 && (
            <div className="search_suggestions">
              {suggestions.map((product) => (
                <div
                  key={product.id}
                  className="suggestion_item"
                  onClick={() =>
                    handleProductClick(product)
                  }
                >
                  <img
                    src={`/images/${product.Image}`}
                    alt={product.name}
                  />

                  <span>{product.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* MENU */}
        <div className="sidebar_menu">
  <Link to="/" onClick={() => setSidebar(false)}>
    Home
  </Link>

  <Link to="/about" onClick={() => setSidebar(false)}>
    About Us
  </Link>

  <Link to="/products" onClick={() => setSidebar(false)}>
    Products
  </Link>

  <Link to="/contact" onClick={() => setSidebar(false)}>
    Contact
  </Link>
</div>
        {/* CALL NOW BUTTON */}
        <a
          href="tel:+918002445408"
          className="call_btn"
        >
          Call Now
        </a>
      </div>
    </>
  );
};

export default Header;