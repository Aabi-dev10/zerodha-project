import React from "react";
const Summary = ({ username }) => {
  return (
    <div className="summary-page-wrapper text-start">
            <div className="user-welcome-banner mb-4 p-4 border rounded bg-white shadow-sm">
        <h2 className="fw-normal m-0 text-dark fs-3">
          Hi, <span className="text-primary fw-medium">{username || "Trader"}</span>!
        </h2>
        <p className="text-muted m-0 fs-6 mt-1">
          Here is a real-time overview of your equity portfolio metrics, margins, and active open positions today.
        </p>
      </div>
      <div className="username">
        <h6>Margin Available</h6>
        <h1 className="fs-2 fw-normal">₹0.00</h1>
        <hr className="my-4" />
      </div>

      <div className="row g-4 mt-2">
        <div className="col-lg-6 col-12">
          <div className="p-3 border rounded bg-white shadow-sm">
            <h5 className="text-muted fs-6"><i className="fa-solid fa-chart-pie me-2"></i>Equity Portfolio Overview</h5>
            <p className="fs-4 fw-bold mt-2 text-success">₹0.00</p>
            <span className="text-muted fs-7">Current Investment Value</span>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <div className="p-3 border rounded bg-white shadow-sm">
            <h5 className="text-muted fs-6"><i className="fa-solid fa-wallet me-2"></i>Account Funds</h5>
            <p className="fs-4 fw-bold mt-2 text-dark">₹0.00</p>
            <span className="text-muted fs-7">Available Equity Margin</span>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Summary;
