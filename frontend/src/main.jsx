import React from "react";
import { createRoot } from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing-page/home/HomePage.jsx';
import AboutPage from './landing-page/about/AboutPage.jsx';
import ProductsPage from './landing-page/products/ProductsPage.jsx';
import PricingPage from './landing-page/pricing/PricingPage.jsx';
import SupportPage from './landing-page/support/SupportPage.jsx';
import Navbar from './landing-page/Navbar.jsx';
import Footer from './landing-page/Footer.jsx';
import NotFound from './landing-page/NotFound.jsx';
import AuthManager from "./landing-page/signup/AuthManager.jsx";


createRoot(document.getElementById('root')).render(
<BrowserRouter>
   <Navbar/>
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
<Route path="/" element={<AuthManager />} />
  <Route path="/signup" element={<AuthManager />} />
  <Route path="/login" element={<AuthManager />} /> 
  <Route path="/About" element={<AboutPage/>}></Route>
  <Route path="/Products" element={<ProductsPage/>}></Route>
  <Route path="/Pricing" element={<PricingPage/>}></Route>
  <Route path="/Support" element={<SupportPage/>}></Route>
  <Route path="*" element={<NotFound/>}></Route>
</Routes>
     <Footer/>
</BrowserRouter>
);
