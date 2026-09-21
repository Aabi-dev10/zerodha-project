import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import Dashboard from "./Dashboard.jsx"; 

axios.defaults.withCredentials = true;

const BACKEND_URL = "https://onrender.com";
const FRONTEND_URL = "https://onrender.com";

const Home = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [loading, setLoading] = useState(true);
  
  const [username, setUsername] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const verifyUserSession = async () => {
      // 🕵️ DEBUG LOG 1: Check what parameters exist in the current URL path string
      console.log("Current Full URL Path:", window.location.href);
      const urlParams = new URLSearchParams(window.location.search);
      const tokenFromUrl = urlParams.get("token");
      console.log("Token extracted from URL search parameters:", tokenFromUrl);

      if (tokenFromUrl) {
        localStorage.setItem("token", tokenFromUrl);
        setCookie("token", tokenFromUrl, { path: "/", sameSite: "none", secure: true, maxAge: 24 * 60 * 60 });
      }

      // Check fallback tracking positions
      const localToken = localStorage.getItem("token");
      const cookieToken = cookies.token;
      
      const activeToken = tokenFromUrl || cookieToken || localToken;

      // 💡 THE SAFETY TRAP: If it lacks a token, alert us before bouncing away!
      if (!activeToken) {
        alert(`❌ DASHBOARD BLOCKED: No authentication token found anywhere!\n\nCookie Token: ${cookieToken}\nLocalStorage Token: ${localToken}\nURL Token: ${tokenFromUrl}`);
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
          alert(`❌ BACKEND REJECTED SESSION: Status returned false.\nMessage: ${data.message || 'No message'}`);
          removeCookie("token", { path: "/" });
          localStorage.removeItem("token");
          window.location.href = `${FRONTEND_URL}/login`;
        }
      } catch (error) {
        alert(`❌ API COMMUNICATION CRASHED:\n${error.message}`);
        console.error("Dashboard session mounting verification failed:", error);
        removeCookie("token", { path: "/" });
        localStorage.removeItem("token");
        window.location.href = `${FRONTEND_URL}/login`;
      }
    };

    verifyUserSession();
  }, [navigate, removeCookie, cookies.token]); 

  // Rest of your menu rendering layout remains completely identical...
  if (loading) {
    return <div className="text-center mt-5"><h3>Loading your trading profile...</h3></div>;
  }

  return (
    <div className="dashboard-root-layout">
      <div className="p-3"><Dashboard username={username} /></div>
    </div>
  );
};

export default Home;
