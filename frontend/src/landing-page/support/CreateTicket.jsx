import React from 'react';

function CreateTicket() {
  return (  
    <div className="container my-5">
      <div className="row px-3">
        {/* Responsive Heading */}
        <h1 className="fs-3 mb-4 text-dark text-opacity-75 fw-normal text-md-start text-center">
          To create a ticket, select a relevant topic.
        </h1>
        
        {/* 1. Account Opening */}
        <div className="col-lg-4 col-md-6 col-12 p-4 my-2 support-link-card">
          <h5 className="mb-3 text-dark fw-normal"><i className="fa-solid fa-circle-plus me-2 text-muted"></i>Account opening</h5>
          <a href="">Resident Individual</a>
          <a href="">Minor Account</a>
          <a href="">NRI Account</a>
          <a href="">Company, Partnership, HUF & LLP</a>
          <a href="">Glossary</a>
        </div>

        {/* 2. Your Zerodha Account */}
        <div className="col-lg-4 col-md-6 col-12 p-4 my-2 support-link-card">
          <h5 className="mb-3 text-dark fw-normal"><i className="fa-solid fa-user me-2 text-muted"></i>Your Zerodha Account</h5>
          <a href="">Profile updates Account closure and reactivation</a>
          <a href="">Bank account addition/change</a>
          <a href="">Nomination</a>
          <a href="">Mobile number and email change</a>
          <a href="">CMR (Client Master Report)</a>
        </div>

        {/* 3. Support Infrastructure */}
        <div className="col-lg-4 col-md-6 col-12 p-4 my-2 support-link-card">
          <h5 className="mb-3 text-dark fw-normal"><i className="fa-solid fa-chart-column me-2 text-muted"></i>Support & Services</h5>
          <a href="">Phone support</a>
          <a href="">Call & Trade desk</a>
          <a href="">Ticket support (available every day, including weekends)</a>
          <a href="">Emergency account blocking</a>
          <a href="">Branch office information</a>
        </div>

        {/* 4. Funds */}
        <div className="col-lg-4 col-md-6 col-12 p-4 my-2 support-link-card">
          <h5 className="mb-3 text-dark fw-normal"><i className="fa-solid fa-wallet me-2 text-muted"></i>Funds</h5>
          <a href="">Add money</a>
          <a href="">Withdraw money</a>
          <a href="">eMandates</a>
          <a href="">Bank verification</a>
          <a href="">Fund settlement</a>
          <a href="">Payment failures</a>
          <a href="">UPI, IMPS, NEFT, RTGS support</a>
        </div>

        {/* 5. Console */}
        <div className="col-lg-4 col-md-6 col-12 p-4 my-2 support-link-card">
          <h5 className="mb-3 text-dark fw-normal"><i className="fa-solid fa-circle-notch me-2 text-muted"></i>Console</h5>
          <a href="">Portfolio reports</a>
          <a href="">P&L reports</a>
          <a href="">Tax P&L</a>
          <a href="">Ledger</a>
          <a href="">Tradebook</a>
          <a href="">Contract notes</a>
          <a href="">Reports and statements</a>
        </div>

        {/* 6. Coin */}
        <div className="col-lg-4 col-md-6 col-12 p-4 my-2 support-link-card">
          <h5 className="mb-3 text-dark fw-normal"><i className="fa-regular fa-circle me-2 text-muted"></i>Coin</h5>
          <a href="">Direct mutual funds</a>
          <a href="">SIP creation and modification</a>
          <a href="">National Pension System (NPS)</a>
          <a href="">Fixed Deposits</a>
          <a href="">Orders and payments</a>
          <a href="">Redeeming investments</a>
          <a href="">Coin account FAQs</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
