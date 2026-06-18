import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { Link, useLocation } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";

import { BsGrid } from "react-icons/bs";

import {
  FiMail,
  FiPhoneCall,
} from "react-icons/fi";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      icon: <AiOutlineHome />,
      path: "/",
    },
    {
      name: "About",
      icon: <AiOutlineUser />,
      path: "/about",
    },
    {
      name: "Products",
      icon: <BsGrid />,
      path: "/products",
    },
    {
      name: "Contact",
      icon: <FiMail />,
      path: "/contact",
    },
  ];

  return (
    <div className={`bottom_navbar ${showNavbar ? "show" : "hide"}`}>
      {navItems.map((item) => (
        <Link
          to={item.path}
          key={item.name}
          className={`nav_item ${
            location.pathname === item.path ? "active" : ""
          }`}
        >
          <div className="nav_icon">
            {item.icon}
          </div>

          <p>{item.name}</p>
        </Link>
      ))}

      <a href="tel:8002445408" className="nav_item">
        <div className="nav_icon">
          <FiPhoneCall />
        </div>

        <p>Call</p>
      </a>
    </div>
  );
};

export default Navbar;