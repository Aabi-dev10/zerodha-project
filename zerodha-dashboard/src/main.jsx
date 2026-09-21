import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie"; 

import "./index.css";
import Home from "./components/Home.jsx"; 

const RootComponent = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          {/* 🔒 PROTECTED ROUTING ENVIRONMENT */}
          {/* Every path hitting this specific dashboard deployment goes straight to Home layout */}
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

createRoot(document.getElementById('root')).render(<RootComponent />);
