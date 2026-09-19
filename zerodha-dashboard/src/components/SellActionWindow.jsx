import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import GeneralContext from "./GeneralContext.jsx"; 
import "./BuyActionWindow.css"; 

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  
  const { closeSellWindow } = useContext(GeneralContext); 
  const navigate = useNavigate();

  const handleSellClick = async (e) => {
    e.preventDefault(); 
    
    try {
      await axios.post(
        "http://localhost:8080/newOrder", 
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "SELL",
        },
        { withCredentials: true }
      );

      closeSellWindow();
      navigate("/orders");
    } catch (err) {
      console.error("Sell transaction failed:", err);
      alert("Could not process sell entry.");
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true" style={{ borderTop: "6px solid #ff5722" }}>
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin credit: ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <button className="btn btn-orange" style={{ backgroundColor: "#ff5722", color: "#fff" }} onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default SellActionWindow;
