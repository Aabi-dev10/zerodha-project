import React, { useState } from "react";
import { Link } from "react-router-dom"; // 💡 Cleaned up unused useNavigate hook
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// 💡 Dynamically resolve your deployed dashboard domain or fall back to local development ports
const DASHBOARD_URL = (import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5173").replace(/\/\$/, "");

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
    toast.error(err, {
      position: "bottom-left",
    });
    
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8080";

      const { data } = await axios.post(
        `${baseURL}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
      
      console.log(data);
      const { success, message, token } = data;
      
      if (success) {
        // 🔒 Save the token locally to circumvent Chrome cross-origin constraints
        if (token) {
          localStorage.setItem("token", token);
        }
        
        handleSuccess(message);
        
        setTimeout(() => {
          // 💡 THE ARCHITECTURAL FIX: 
          // Instead of navigating inside the public app, jump domains to the dashboard app
          // Passing the token as a URL param ensures the dashboard application can intercept it immediately
          window.location.href = `${DASHBOARD_URL}/?token=${token}`;
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Unable to connect to the authentication server.");
    }
    
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h2>Login to Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label p-2 fs-6" htmlFor="emailInput">
            Email:
          </label>
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
          <label htmlFor="passwordInput" className="form-label">
            Password:
          </label>
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
        <button type="submit" className="btn btn-primary w-100 p-3">Submit</button>
        <span className="d-block mt-3 text-center">
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
