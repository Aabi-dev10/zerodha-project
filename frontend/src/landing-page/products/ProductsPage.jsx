import React from "react";
import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Univers.jsx";
function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="/Media/images/kite.png"
        productsName="Kite"
        productsDescription="Zerodha Kite is a modern web and mobile trading platform that
         enables users to invest and trade in stocks, derivatives, mutual . It is designed to deliver a f
         ast, intuitive, and reliable trading experience for both beginners and experienced 
         investors."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageUrl="/Media/images/console.png"
        productsName="Console"
        productsDescription="Account dashboard with portfolio
         analytics, tax reports, P&L 
         statements, holdings, and trade 
         history.Other fintech services for investing
          and portfolio management."
        learnMore=""
      />
      <LeftSection
        imageUrl="/Media/images/coin.png"
        productsName="Coin"
        productsDescription="Zerodha Coin is a direct mutual fund investment
        platform developed by Zerodha. It enables users to invest in direct 
        mutual funds without distributor commissions,
         helping them reduce costs and 
         maximize long-term returns."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageUrl="/Media/images/kiteconnect.png"
        productsName="Kite connect API"
        productsDescription="APIs for developers and businesses to 
        build trading and investment 
        applications., commodities,
         currencies, ETFs, and more. Features 
         live market data, advanced charts, and 
         order management.."
        learnMore=""
      />
      <LeftSection
        imageUrl="/Media/images/varsity.png"
        productsName="Varsity mobile"
        productsDescription="Zerodha Varsity Mobile is a free financial education app that helps users  
        learn about stock markets, investing, 
        trading, technical analysis, derivatives, 
        mutual funds, and personal finance.."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">Want to know more about aor technology stack? Check out the Zerodha.tech blog</p>
      <Universe />
    </>
  );
}

export default ProductsPage;
