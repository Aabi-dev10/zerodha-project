import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import type { Position } from "../types";

const Positions = () => {
  const [allPositions, setAllPositions] = useState<Position[]>([]);
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const baseURL: string =
      import.meta.env.VITE_API_URL || "http://localhost:8080";

    axios
      .get<Position[]>(`${baseURL}/allPositions`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        setAllPositions(res.data);
      })
      .catch((err: unknown) => {
        console.error("Error fetching live trading positions:", err);
      });
  }, [cookies.token]);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock: Position, index: number) => {
              const qty = stock.qty || 0;
              const avg = stock.avg || 0;
              const price = stock.price || 0;

              const curValue = price * qty;
              const pnl = curValue - avg * qty;
              const isProfit = pnl >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock._id || index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={dayClass}>{stock.day || "0.00%"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
