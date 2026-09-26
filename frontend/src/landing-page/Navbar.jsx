import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg border-bottom zerodha-navbar"
        style={{ backgroundColor: "#FFF" }}
      >
        <div className="container p-2">

          <Link className="navbar-brand" to="/" onClick={closeSidebar}>
            <img
              src="Media/images/logo.svg"
              alt="logo"
              style={{ width: "25%" }}
            />
          </Link>

          <button
            className="mobile-menu-btn"
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="desktop-navbar">
            <ul className="navbar-nav mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-overlay ${isOpen ? "show" : ""}`}
        onClick={closeSidebar}
      ></div>

      <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>

        <div className="sidebar-header">
          <span>Menu</span>

          <button
            className="sidebar-close"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="sidebar-links">

          <Link to="/signup" onClick={closeSidebar}>
            Signup
          </Link>

          <Link to="/about" onClick={closeSidebar}>
            About
          </Link>

          <Link to="/products" onClick={closeSidebar}>
            Products
          </Link>

          <Link to="/pricing" onClick={closeSidebar}>
            Pricing
          </Link>

          <Link to="/support" onClick={closeSidebar}>
            Support
          </Link>

        </div>

      </div>
    </>
  );
}

export default Navbar;

