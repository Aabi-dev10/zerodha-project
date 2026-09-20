import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Helper to strip any accidentally appended trailing slashes
const BACKEND_URL = (import.meta.env.VITE_API_URL || "http://localhost:8080").replace(/\/\$/, "");
const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174/";

// Main wrapper component
const AuthManager = () => {
  const location = useLocation(); 

  if (location.pathname === "/") {
    return <OpenAccountView />;
  } else if (location.pathname === "/login") {
    return <LoginView />;
  } else {
    return <SignupView />;
  }
};

// VIEW 1: OPEN ACCOUNT DASHBOARD
const OpenAccountView = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return; 
      }
      
      try {
        const { data } = await axios.post(
          `${BACKEND_URL}/`, 
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        
        if (status) {
          setUsername(user);
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Verification error:", error);
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <>
      <div className="home_page text-center mt-5">
        <h4>
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout} className="btn btn-danger">LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

// VIEW 2: NEW! LOGIN FORM
const LoginView = () => {
  const navigate = useNavigate();
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

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/login`, 
        { ...inputValue },
        { withCredentials: true }
      );
      
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        // 💡 UPDATED: Added a slightly larger delay (1.5s) and switched to window.location.replace
        // This stops history looping and gives the secure cross-domain cookie time to write to browser memory
        setTimeout(() => {
          window.location.replace(DASHBOARD_URL); 
        }, 1500);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("Login error:", error);
      handleError("Invalid email or password.");
    }
    
    setInputValue({ email: "", password: "" });
  };

  return (
    <div
      className="container p-4 mt-5"
      style={{
        border: "1px solid rgb(241, 246, 253)",
        borderRadius: "10px",
        width: "600px",
        backgroundColor: "hsl(145, 56%, 87%)", 
      }}
    >
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
              className="form-control border-success w-100 p-3 text-center"
              id="emailInput"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label p-2 fs-6" htmlFor="passwordInput">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              className="form-control border-success w-100 p-3 text-center"
              id="passwordInput"
              required
            />
          </div>

          <button type="submit" className="btn btn-success btn-lg mt-2">
            Login
          </button>
          
          <h5 className="p-1 mt-3">
            Don't have an account? <Link to="/signup">Signup</Link>
          </h5>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

// VIEW 3: SIGNUP FORM
const SignupView = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/signup`, 
        { ...inputValue },
        { withCredentials: true }
      );
      
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        // 💡 UPDATED: Added a slightly larger delay (1.5s) and switched to window.location.replace
        setTimeout(() => {
          window.location.replace(DASHBOARD_URL); 
        }, 1500);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("Signup error:", error);
      handleError("Something went wrong. Please try again.");
    }
    
    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <div
      className="container p-4 mt-5"
      style={{
        border: "1px solid rgb(241, 246, 253)",
        borderRadius: "10px",
        width: "600px",
        backgroundColor: "hsl(199, 86%, 87%)",
      }}
    >
      <div>
        <h2>Signup Account</h2>
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
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label p-2 fs-6" htmlFor="userInput">
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              className="form-control border-primary w-100 p-3 text-center"
              id="userInput"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label p-2 fs-6" htmlFor="passwordInput">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              className="form-control border-primary w-100 p-3 text-center"
              id="passwordInput"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg mt-2">
            Submit
          </button>
          
          <h5 className="p-1 mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </h5>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AuthManager;
