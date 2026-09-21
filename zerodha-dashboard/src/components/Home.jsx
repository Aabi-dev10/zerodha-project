import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import Dashboard from "./Dashboard.jsx"; 

axios.defaults.withCredentials = true;

const BACKEND_URL = (import.meta.env.VITE_API_URL || "https://onrender.com").replace(/\/\$/, "");
const FRONTEND_URL = (import.meta.env.VITE_FRONTEND_URL || "https://onrender.com").replace(/\/\$/, "");

const Home = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [loading, setLoading] = useState(true);
  
  const [username, setUsername] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 💡 ADDED: State variable to track the token directly inside the application memory loop
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    const verifyUserSession = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const tokenFromUrl = urlParams.get("token");

      // 💡 Determine active token without relying purely on browser storage layers
      const activeToken = tokenFromUrl || cookies.token || localStorage.getItem("token") || sessionToken;

      if (tokenFromUrl) {
        setSessionToken(tokenFromUrl);
        // Try saving as fallback, even if browser filters flag it
        localStorage.setItem("token", tokenFromUrl);
        setCookie("token", tokenFromUrl, { path: "/", sameSite: "none", secure: true, maxAge: 24 * 60 * 60 });
        
        // Keep the token in the URL for now so refreshes don't drop the verification state
      }

      if (!activeToken) {
        console.log("🔒 Access denied: Missing token string.");
        window.location.href = `${FRONTEND_URL}/login`;
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
  }, [location.search, cookies.token, removeCookie]); // 💡 Listens directly to URL string parameter modifications

  const handleLogout = () => {
    removeCookie("token", { path: "/" });
    localStorage.removeItem("token");
    window.location.href = `${FRONTEND_URL}/login`; 
  };

  const getLinkClass = (path) => {
    // Preserve the URL query string token when shifting menu selections
    return location.pathname === path ? "nav-link active-tab" : "nav-link";
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
          {/* 💡 Appended search location string parameter flags to nested links */}
          <Link to={`/${location.search}`} className="nav-brand-logo" onClick={handleNavClick}>
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
            <Link to={`/${location.search}`} className={getLinkClass("/")}>Dashboard</Link>
            <Link to={`/orders${location.search}`} className={getLinkClass("/orders")}>Orders</Link>
            <Link to={`/holdings${location.search}`} className={getLinkClass("/holdings")}>Holdings</Link>
            <Link to={`/positions${location.search}`} className={getLinkClass("/positions")}>Positions</Link>
            <Link to={`/funds${location.search}`} className={getLinkClass("/funds")}>Funds</Link>
            <Link to={`/apps${location.search}`} className={getLinkClass("/apps")}>Apps</Link>
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
