import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie"; // 💡 ADDED: For token fallback
import { VerticalGraph } from "./VerticalGraph.jsx";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [cookies] = useCookies(["token"]); // 💡 ADDED: Read local cookie token

  useEffect(() => {
    const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8080";

    // 💡 UPDATED: Added headers configuration block to pass the Authorization token
    axios.get(`${baseURL}/allHoldings`, { 
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${cookies.token}`
      }
    }) 
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
  }, [cookies.token]); // 💡 ADDED: Depend on cookie token state changes

  let totalInvestment = 0;
  let totalCurrentValue = 0;

  allHoldings.forEach((stock) => {
    const qty = stock.qty || 0;
    const avg = stock.avg || 0;
    const price = stock.price || 0;

    totalInvestment += avg * qty;
    totalCurrentValue += price * qty;
  });
  const totalPnL = totalCurrentValue - totalInvestment;
  const pnlPercent = totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;
  const overallPnLClass = totalPnL >= 0 ? "profit" : "loss";
  const labels = allHoldings.map((stock) => stock.name || "Unknown");
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price || 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const qty = stock.qty || 0;
              const avg = stock.avg || 0;
              const price = stock.price || 0;

              const curValue = price * qty;
              const pnl = curValue - (avg * qty);
              const isProfit = pnl >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock._id || index}>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={profClass}>{stock.net || "0.00%"}</td>
                  <td className={dayClass}>{stock.day || "0.00%"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col">
          <h5>
            {Math.floor(totalInvestment).toLocaleString()}.
            <span>{Math.round((totalInvestment % 1) * 100).toString().padStart(2, "0")}</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {Math.floor(totalCurrentValue).toLocaleString()}.
            <span>{Math.round((totalCurrentValue % 1) * 100).toString().padStart(2, "0")}</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={overallPnLClass}>
            {totalPnL.toFixed(2)} ({pnlPercent >= 0 ? "+" : ""}{pnlPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
