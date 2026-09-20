const path = require("path");
const jwt = require('jsonwebtoken');
require("dotenv").config({ path: path.resolve(__dirname, "../.env") }); 
const FundsModel = require("../model/fundsModel.js");
const User = require("../model/UserModel.js");
const { createSecretToken } = require("../util/SecretToken.js");
const bcrypt = require("bcryptjs");

// 1. SIGNUP CONTROLLER ROUTE
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    console.log("Processing Signup for:", username, email);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists", success: false });
    }
    const user = await User.create({ email, password, username, createdAt });
    
    await FundsModel.create({
      userId: user._id,
      availableMargin: 75000.00,
      availableCash: 75000.00,
      openingBalance: 75000.00
    });
    
    const token = createSecretToken(user._id);
    
    // 💡 UPDATED: Configured for production HTTPS cookie handling across origins
    res.cookie("token", token, {
      path: "/",
      withCredentials: true,
      sameSite: "none",           // 🔒 REQUIRED: Allows cookie tracking across separate Render sites
      secure: true,               // 🔒 REQUIRED: Encrypts the cookie over HTTPS on Render
      httpOnly: false,            // Allows your frontend layout routing logic to check token existence
      maxAge: 24 * 60 * 60 * 1000 // 1 Day
    });
    
    return res.status(201).json({ 
      message: "User signed in successfully", 
      success: true, 
      user: { username: user.username, email: user.email }, 
      token 
    });
  } catch (error) {
    console.error("Signup Processing Error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// 2. LOGIN CONTROLLER ROUTE
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required', success: false });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Incorrect password or email', success: false }); 
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: 'Incorrect password or email', success: false }); 
    }
    
    const token = createSecretToken(user._id);
    
    // 💡 UPDATED: Configured for production HTTPS cookie handling across origins
    res.cookie("token", token, {
      path: "/",
      withCredentials: true,
      sameSite: "none",           // 🔒 REQUIRED: Allows cookie tracking across separate Render sites
      secure: true,               // 🔒 REQUIRED: Encrypts the cookie over HTTPS on Render
      httpOnly: false,            // Allows your frontend layout routing logic to check token existence
      maxAge: 24 * 60 * 60 * 1000 // 1 Day
    });
    
    return res.status(200).json({ 
      message: "User logged in successfully", 
      success: true, 
      user: { username: user.username, email: user.email },
      token 
    });
  } catch (error) {
    console.error("Login Processing Error:", error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// 3. VERIFY COOKIE DASHBOARD ROUTE
module.exports.VerifyUser = async (req, res) => {
  try {
    const token = req.cookies.token;
    console.log("Verifying token connection payload:", token);
    if (!token) {
      return res.json({ status: false, message: "Authentication cookie missing" });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.json({ status: false, message: "User no longer exists" });
      }
      console.log(`✨ User verified successfully: ${user.username}`);
      return res.json({ status: true, user: user.username });
    } catch (jwtError) {
      console.log("Token verification failed!");
      return res.json({ status: false, message: "Token verification failed" });
    }
  } catch (error) {
    console.error("Token verification exception:", error);
    return res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
