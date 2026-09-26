import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import Dashboard from "./Dashboard.jsx";

axios.defaults.withCredentials = true;

const BACKEND_URL = (
  import.meta.env.VITE_API_URL ||
  "https://zerodha-project-byag.onrender.com"
).replace(/\/+$/, "");

const FRONTEND_URL = (
  import.meta.env.VITE_FRONTEND_URL ||
  "https://zerodha-frontend-main.onrender.com"
).replace(/\/+$/, "");

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
          maxAge: 24 * 60 * 60,
        });
      }

      const activeToken =
        tokenFromUrl ||
        cookies.token ||
        localStorage.getItem("token");

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
            headers: {
              Authorization: `Bearer ${activeToken}`,
            },
            withCredentials: true,
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
        console.error(
          "Dashboard session mounting verification failed:",
          error
        );

        removeCookie("token", { path: "/" });
        localStorage.removeItem("token");
        window.location.href = `${FRONTEND_URL}/login`;
      }
    };

    verifyUserSession();
  }, [
    navigate,
    removeCookie,
    cookies.token,
    location.search,
    setCookie,
  ]);

  const handleLogout = () => {
    setIsMenuOpen(false);
    removeCookie("token", { path: "/" });
    localStorage.removeItem("token");
    window.location.href = `${FRONTEND_URL}/login`;
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "nav-link active-tab"
      : "nav-link";
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  if (loading) {
    return (
      <div
        className="text-center mt-5"
        style={{ fontFamily: "sans-serif" }}
      >
        <h3>Loading your trading profile...</h3>

        <p
          style={{
            color: "#9b9b9b",
            fontSize: "14px",
          }}
        >
          Connecting to secure server environment. This can take up to
          50 seconds on first launch.
        </p>
      </div>
    );
  }

  return (
    <div className="dashboard-root-layout">

      <nav className="dashboard-navbar">
        <div className="nav-container-wrapper">

          <Link
            to="/"
            className="nav-brand-logo"
            onClick={handleNavClick}
          >
            Kite Clone
          </Link>

          <div className="desktop-nav-links">
            <Link
              to="/"
              className={getLinkClass("/")}
              onClick={handleNavClick}
            >
              Dashboard
            </Link>

            <Link
              to="/orders"
              className={getLinkClass("/orders")}
              onClick={handleNavClick}
            >
              Orders
            </Link>

            <Link
              to="/holdings"
              className={getLinkClass("/holdings")}
              onClick={handleNavClick}
            >
              Holdings
            </Link>

            <Link
              to="/positions"
              className={getLinkClass("/positions")}
              onClick={handleNavClick}
            >
              Positions
            </Link>

            <Link
              to="/funds"
              className={getLinkClass("/funds")}
              onClick={handleNavClick}
            >
              Funds
            </Link>

            <Link
              to="/apps"
              className={getLinkClass("/apps")}
              onClick={handleNavClick}
            >
              Apps
            </Link>

            <span className="nav-username-display">
              Hi, {username}!
            </span>

            <button
              onClick={handleLogout}
              className="btn-logout-desktop"
            >
              Logout
            </button>
          </div>

          <button
            className={`dashboard-mobile-menu-btn ${
              isMenuOpen ? "is-active" : ""
            }`}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open dashboard menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>

      <div
        className={`dashboard-sidebar-overlay ${
          isMenuOpen ? "show" : ""
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <aside
        className={`dashboard-mobile-sidebar ${
          isMenuOpen ? "open" : ""
        }`}
      >

        <div className="dashboard-sidebar-header">

          <div>
            <div className="sidebar-title">
              Kite Clone
            </div>

            <div className="sidebar-user">
              <span className="sidebar-avatar">
                {username?.charAt(0)?.toUpperCase()}
              </span>

              <div>
                <p>Welcome back</p>
                <strong>{username}</strong>
              </div>
            </div>
          </div>

          <button
            className="dashboard-sidebar-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close dashboard menu"
          >
            ×
          </button>

        </div>

        <div className="dashboard-sidebar-divider"></div>

        <div className="dashboard-sidebar-links">

          <Link
            to="/"
            className={getLinkClass("/")}
            onClick={handleNavClick}
          >
            <span className="sidebar-icon">⌂</span>
            Dashboard
          </Link>

          <Link
            to="/orders"
            className={getLinkClass("/orders")}
            onClick={handleNavClick}
          >
            <span className="sidebar-icon">◫</span>
            Orders
          </Link>

          <Link
            to="/holdings"
            className={getLinkClass("/holdings")}
            onClick={handleNavClick}
          >
            <span className="sidebar-icon">▥</span>
            Holdings
          </Link>

          <Link
            to="/positions"
            className={getLinkClass("/positions")}
            onClick={handleNavClick}
          >
            <span className="sidebar-icon">↗</span>
            Positions
          </Link>

          <Link
            to="/funds"
            className={getLinkClass("/funds")}
            onClick={handleNavClick}
          >
            <span className="sidebar-icon">₹</span>
            Funds
          </Link>

          <Link
            to="/apps"
            className={getLinkClass("/apps")}
            onClick={handleNavClick}
          >
            <span className="sidebar-icon">▦</span>
            Apps
          </Link>

        </div>

        <div className="dashboard-sidebar-bottom">

          <button
            className="sidebar-logout-btn"
            onClick={handleLogout}
          >
            <span>↪</span>
            Logout
          </button>

          <p className="sidebar-footer-text">
            Kite Clone Dashboard
          </p>

        </div>

      </aside>

      <div className="dashboard-main-content-window p-3">
        <Dashboard username={username} />
      </div>

    </div>
  );
};

export default Home;

