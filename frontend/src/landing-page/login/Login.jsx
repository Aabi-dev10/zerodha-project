import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });
    
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 💡 ABSOLUTE BACKEND URL PRODUCTION FALLBACK
      const baseURL = (import.meta.env.VITE_API_URL || "https://zerodha-project-byag.onrender.com").replace(/\/\$/, "");

      const { data } = await axios.post(
        `${baseURL}/login`,
        { ...inputValue },
        { withCredentials: true },
      );
      
      const { success, message, token } = data;
      
      if (success) {
        if (token) {
          localStorage.setItem("token", token);
        }
        
        handleSuccess(message);
        
        setTimeout(() => {
          // 💡 ABSOLUTE DASHBOARD PORTAL PRODUCTION FALLBACK
          const targetDashboard = (import.meta.env.VITE_DASHBOARD_URL || "https://zerodha-dashboard-app.onrender.com").replace(/\/\$/, "");
          
          // Jump domains explicitly with the query token parameter attached
          window.location.href = `${targetDashboard}/?token=${token}`;
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Unable to connect to the authentication server.");
    }
  };

  return (
    <div>
      <h2>Login to Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="emailInput">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            className="form-control border-primary w-100 p-3 text-center"
            id="emailInput"
            autoComplete="username" 
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">Password:</label>
          <input
            id="passwordInput"
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            className="form-control border-primary w-100 p-3 text-center"
            autoComplete="current-password" 
            required
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
