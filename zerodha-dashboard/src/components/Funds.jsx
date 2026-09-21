import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie"; // 💡 ADDED: Read local session token
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

const Funds = () => {
  const [fundsData, setFundsData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [inputAmount, setInputAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cookies] = useCookies(["token"]); // 💡 ADDED: Initialize cookie hook

  const fetchFunds = async () => {
    try {
      // 💡 UPDATED: Injected Headers block with Bearer token token fallback validation
      const response = await axios.get(`${BACKEND_URL}/getFunds`, { 
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${cookies.token}`
        }
      });
      setFundsData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching dynamic funds data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFunds();
  }, [cookies.token]); // 💡 ADDED: Triggers fetch immediately upon cookie token synchronization

  const handleAddFundsSubmit = async (e) => {
    e.preventDefault();
    if (!inputAmount || isNaN(inputAmount) || Number(inputAmount) <= 0) {
      alert("Please enter a valid amount greater than 0");
      return;
    }

    setIsSubmitting(true);
    try {
      // 💡 UPDATED: Added headers metadata to let backend parse transaction values securely
      const response = await axios.post(
        `${BACKEND_URL}/addFunds`,
        { amount: inputAmount },
        { 
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${cookies.token}`
          }
        }
      );

      if (response.data.success) {
        alert(response.data.message);
        setInputAmount("");
        fetchFunds(); 
      }
    } catch (error) {
      console.error("Deposit request failed:", error);
      alert(error.response?.data?.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCurrency = (value) => {
    if (value === undefined || value === null) return "0.00";
    return Number(value).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  if (loading) {
    return <div className="text-center mt-5"><h5>Fetching account margins...</h5></div>;
  }

  if (!fundsData) {
    return <div className="text-center mt-5 text-danger"><h5>Failed to load account ledger balances.</h5></div>;
  }

  return (
    <>
      <div className="funds p-4 mb-4 border rounded bg-light">
        <p className="mb-3 fw-bold text-muted">Instant, zero-cost fund transfers with UPI </p>
        
        <form onSubmit={handleAddFundsSubmit} className="d-flex gap-2 align-items-center flex-wrap">
          <input
            type="number"
            placeholder="Enter amount (e.g. 5000)"
            value={inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
            className="form-control w-25 p-2 border-primary"
            disabled={isSubmitting}
            required
          />
          <button type="submit" className="btn btn-green px-4 py-2 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Add Funds"}
          </button>
        </form>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p className="fw-bold fs-5">Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{formatCurrency(fundsData.availableMargin)}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{formatCurrency(fundsData.usedMargin)}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{formatCurrency(fundsData.availableCash)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{formatCurrency(fundsData.openingBalance)}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>{formatCurrency(fundsData.payin)}</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>{formatCurrency(fundsData.span)}</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>{formatCurrency(fundsData.deliveryMargin)}</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>{formatCurrency(fundsData.exposure)}</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>{formatCurrency(fundsData.optionsPremium)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>{formatCurrency(fundsData.collateralLiquid)}</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>{formatCurrency(fundsData.collateralEquity)}</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>{formatCurrency(fundsData.totalCollateral)}</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity mt-5 border p-4 rounded text-center bg-white shadow-sm">
            <p className="text-muted">You don't have a commodity account</p>
            <Link to="#" className="btn btn-blue text-white px-4">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
