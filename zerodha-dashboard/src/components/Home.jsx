import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import Dashboard from "./Dashboard.jsx"; 

axios.defaults.withCredentials = true;

// 💡 FIXED: Corrected regex statement format to reliably clear trailing slashes from environment URLs
const BACKEND_URL = (import.meta.env.VITE_API_URL || "http://localhost:8080").replace(/\/\$/, "");

const Home = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [loading, setLoading] = useState(true);
  
  const [username, setUsername] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    // 💡 THE ULTIMATE ROUTE GUARD BYPASS FIX: 
    // If the browser route hits /login or /signup, break execution instantly!
    // This allows the public login pages to render instead of locking the browser in a validation check loop.
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setLoading(false);
      return;
    }

    const verifyUserSession = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const tokenFromUrl = urlParams.get("token");

      if (tokenFromUrl) {
        localStorage.setItem("token", tokenFromUrl);
        setCookie("token", tokenFromUrl, { 
          path: "/", 
          sameSite: "none", 
          secure: true, 
          maxAge: 24 * 60 * 60 
        });
        
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      // Read fallback token memory 
      const activeToken = cookies.token || localStorage.getItem("token") || tokenFromUrl;

      if (!activeToken) {
        console.log("🔒 Access denied: Missing token string.");
        navigate("/login");
        return;
      }
    
      try {
        const { data } = await axios.post(
          `${BACKEND_URL}/`, 
          {},
          { 
            headers: { Authorization: `Bearer ${activeToken}` },
            withCredentials: true 
          } 
        );
        
        const { status, user } = data;
        
        if (status) {
          setUsername(user);
          setLoading(false);
        } else {
          removeCookie("token", { path: "/" });
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Dashboard session mounting verification failed:", error);
        removeCookie("token", { path: "/" });
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    verifyUserSession();
    // 💡 FIXED: Cleaned array properties to prevent state refresh loop crashes
  }, [location.pathname, navigate, removeCookie]); 

  const handleLogout = () => {
    removeCookie("token", { path: "/" });
    localStorage.removeItem("token"); 
    navigate("/login"); 
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? "nav-link active-tab" : "nav-link";
  };

  const handleNavClick = () => {
    setIsMenuOpen(false); 
  };

  // 💡 SAFETY CHECK: If navigating to login or signup, render absolutely nothing 
  // here so that the public component routes in main.jsx/index.jsx take over smoothly.
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  if (loading) {
    return (
      <div className="text-center mt-5" style={{ fontFamily: "sans-serif" }}>
        <h3>Loading your trading profile...</h3>
        <p style={{ color: "#9b9b9b", fontSize: "14px" }}>
          Connecting to secure server environment. This can take up to 50 seconds on first launch.
        </p>
      </div>
    );
  }

  return (
    <div className="dashboard-root-layout">
      <nav className="dashboard-navbar shadow-sm">
        <div className="nav-container-wrapper">
          <Link to="/" className="nav-brand-logo" onClick={handleNavClick}>
            Kite Clone
          </Link>
          <button 
            className={`hamburger-menu-btn ${isMenuOpen ? "is-active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <div className={`nav-links-menu-box ${isMenuOpen ? "mobile-open" : ""}`}>
            <Link to="/" className={getLinkClass("/")} onClick={handleNavClick}>Dashboard</Link>
            <Link to="/orders" className={getLinkClass("/orders")} onClick={handleNavClick}>Orders</Link>
            <Link to="/holdings" className={getLinkClass("/holdings")} onClick={handleNavClick}>Holdings</Link>
            <Link to="/positions" className={getLinkClass("/positions")} onClick={handleNavClick}>Positions</Link>
            <Link to="/funds" className={getLinkClass("/funds")} onClick={handleNavClick}>Funds</Link>
            <Link to="/apps" className={getLinkClass("/apps")} onClick={handleNavClick}>Apps</Link>
            <span className="nav-username-display">Hi, {username}!</span>
            <button onClick={handleLogout} className="btn-logout-desktop">Logout</button>
          </div>
        </div>
      </nav>
      <div className="dashboard-main-content-window p-3">
        <Dashboard username={username} />
      </div>
    </div>
  );
};

export default Home;
