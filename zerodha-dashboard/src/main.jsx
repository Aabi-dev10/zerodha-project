import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie"; 

import "./index.css";
import Home from "./components/Home.jsx"; 
import Login from "./components/Login.jsx";   // 💡 ADDED: Import your public Login view
import Signup from "./components/Signup.jsx"; // 💡 ADDED: Import your public Signup view

const RootComponent = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          {/* 🔓 PUBLIC INDEPENDENT ROUTES: Free from Home.jsx validation checks */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 🔒 PROTECTED ROUTING ENVIRONMENT */}
          {/* Using path="/*" allows nested views inside Dashboard.jsx to resolve correctly */}
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

createRoot(document.getElementById('root')).render(<RootComponent />);
