import React from 'react';

function Hero(){
    return ( 
      <div className="container">
        <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-3">Free equity investments and flat 20 traday and F&O trades </h3>
              </div>
      <div className="row p-5 mt-3">
        <div className="col-4 p-4">
        <img src="/Media/images/pricingEquity.svg"/>
        <h4>Free equity delievry</h4>
        <p className='text-muted'>Above ₹10 lakh: ₹300/year + GST</p>
        </div>
        <div className="col-4 p-4">
         <img src="\Media\images\intradayTrades.svg"/>
        <h4>Government exchange</h4>
        <p className='text-muted'>Partnership/LLP/Corporate account: ₹500</p>
        </div>
        <div className="col-4 p-4">
         <img src="/Media/images/pricingEquity.svg"/>
        <h4>Resident individual</h4>
        <p className='text-muted'>NRI account opening</p>
        </div>
      </div>
    </div>
        );
}

export default Hero;