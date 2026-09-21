import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { useCookies } from "react-cookie"; 

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [cookies] = useCookies(["token"]); // Read local cookie token

  useEffect(() => {
    const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8080";

    // 💡 FIXED: Replaced axiosInstance with clean, single axios call
    axios.get(`${baseURL}/allOrders`, { 
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${cookies.token}`
      }
    }) 
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, [cookies.token]); // Depend on cookie token state changes

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      {allOrders.length === 0 ? (
        <div className="no-orders" style={{ textAlign: "center", padding: "30px", color: "#9b9b9b" }}>
          <p>You haven't placed any orders today.</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => {
                const qty = order.qty || 0;
                const price = order.price || 0;
                const modeClass = order.mode === "BUY" ? "profit" : "loss"; 

                return (
                  <tr key={order._id || index}>
                    <td>{order.name}</td>
                    <td>{qty}</td>
                    <td>{price.toFixed(2)}</td>
                    <td className={modeClass} style={{ fontWeight: "bold" }}>
                      {order.mode}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Orders;
