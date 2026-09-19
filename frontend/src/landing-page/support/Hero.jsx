import React from 'react';

function Hero() {
  return ( 
    <section className="container-fluid py-5" id="supportHero">
      <div className="container custom-support-container">
        
        {/* 1. Header Row (Split text layouts: title left, link right) */}
        <div className="d-flex justify-content-between align-items-center mb-5 support-top-nav">
          <h4 className="fs-5 fw-medium text-white m-0 opacity-90">Support Portal</h4>
          <a href="" className="text-white text-decoration-underline fs-6 fw-normal transition-link">
            Track tickets
          </a>
        </div>

        {/* 2. Core Layout Split Grid */}
        <div className="row mt-4 support-main-row">
          
          {/* Left Column: Search block taking up 60% of viewport space */}
          <div className="col-lg-7 col-md-12 text-white pe-lg-5 mb-4 mb-lg-0">
            <h2 className="fs-4 fw-normal lh-base mb-4 support-hero-title">
              Search for an answer or browse help topics to create a ticket
            </h2>
            
            {/* Search Input Box with embedded padding */}
            <div className="position-relative w-100 mb-4 search-input-wrapper">
              <input 
                type="text"
                placeholder="Eg. How do i activate my F&O, Why is my order getting rejected?"
                className="form-control border-0 bg-white ps-4 pe-5 shadow-sm"
                style={{ borderRadius: '4px', height: '54px', fontSize: '14px' }}
              />
              <i className="fa-solid fa-magnifying-glass position-absolute end-0 top-50 translate-middle-y me-4 text-muted fs-5"></i>
            </div>
            
            {/* Action Links underneath input grid rows */}
            <div className="d-flex flex-wrap gap-4 support-action-links">
              <a href="">Create a new ticket</a>
              <a href="">Attach screenshots or documents</a>
              <a href="">Track ticket status</a>
              <a href="">Reply to support</a>
            </div>
          </div>

          {/* Right Column: Featured Section aligned to the right side edge */}
          <div className="col-lg-5 col-md-12 text-white ps-lg-5 mt-3 mt-lg-0">
            <h3 className="fs-4 fw-normal mb-3 support-featured-title">Featured</h3>
            <ol className="ps-3 mb-0 support-featured-list" style={{ lineHeight: "2.4" }}>
              <li className="mb-2">
                <a href="" className="transition-link">Current buyback offers — September 2026</a>
              </li>
              <li>
                <a href="" className="transition-link">Rights Entitlements (RE) and trading FAQs</a>
              </li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
