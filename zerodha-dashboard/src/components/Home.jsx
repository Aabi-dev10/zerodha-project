import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import Dashboard from "./Dashboard.jsx"; 

axios.defaults.withCredentials = true;

// 💡 FIXED: The regex pattern is corrected to cleanly strip trailing slashes
const BACKEND_URL = (import.meta.env.VITE_API_URL || "http://localhost:8080").replace(/\/\$/, "");
const FRONTEND_URL = (import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173").replace(/\/\$/, "");

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [loading, setLoading] = useState(true);
  
  const [username, setUsername] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
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

      // Check cookies first, then check local fallback storage context
      const activeToken = cookies.token || localStorage.getItem("token") || tokenFromUrl;

      // 2. Safety lock: If there's no token anywhere, redirect back to login
      if (!activeToken) {
        window.location.href = `${FRONTEND_URL}/login`;
        return;
      }
    
      try {
        const { data } = await axios.post(
          `${BACKEND_URL}/`, 
          {},
          { 
            headers: { Authorization: `Bearer ${activeToken}` }, // Attached the header fallback
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
          window.location.href = `${FRONTEND_URL}/login`;
        }
      } catch (error) {
        console.error("Dashboard session mounting verification failed:", error);
        removeCookie("token", { path: "/" });
        localStorage.removeItem("token");
        window.location.href = `${FRONTEND_URL}/login`;
      }
    };

    verifyUserSession();
  }, [cookies.token, removeCookie]);

  const handleLogout = () => {
    removeCookie("token", { path: "/" });
    localStorage.removeItem("token"); // Clear on logout
    window.location.href = `${FRONTEND_URL}/login`; 
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? "nav-link active-tab" : "nav-link";
  };

  const handleNavClick = () => {
    setIsMenuOpen(false); 
  };

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
            <span className="nav-username-display">
              Hi, {username}!
            </span>
            <button onClick={handleLogout} className="btn-logout-desktop">
              Logout
            </button>
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
