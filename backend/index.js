require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const methodOverride = require('method-override');
const jwt = require("jsonwebtoken");
const FundsModel = require("./model/fundsModel.js");
const HoldingsModel = require("./model/holdingsModel.js");
const  PositionsModel  = require("./model/positionsModel.js");
const  OrdersModel  = require("./model/ordersModel.js");
const authRoute  = require("./Routes/AuthRoute.js");
const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;
const ALLOWED_ORIGINS = [
  process.env.FRONTEND_URL, 
  "https://zerodha-frontend-main.onrender.com"
   "https://zerodha-dashboard-app.onrender.com",
  "http://localhost:5174", 
  "http://localhost:5173"  
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
            if (ALLOWED_ORIGINS.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS policy"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, 
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(bodyParser.json());

//Holdings routes
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

//Positions routes

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

//Orders routes
app.get("/allOrders", async (req, res) => {
  try {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

//Orders routes
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    let newOrder = new OrdersModel({
      name: name,
      qty: Number(qty),
      price: Number(price),
      mode: mode, 
    });

    await newOrder.save();
    res.status(201).send("Order processed successfully!");
  } catch (err) {
    console.error("Order error:", err);
    res.status(500).send("Error saving transaction details.");
  }
});
 
//Funde routes
app.get("/getFunds", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Missing authentication token." });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
        let userFunds = await FundsModel.findOne({ userId: decoded.id });
    if (!userFunds) {
      userFunds = await FundsModel.create({ userId: decoded.id });
    }
    const totalCollateral = userFunds.collateralLiquid + userFunds.collateralEquity;
        return res.status(200).json({
      availableMargin: userFunds.availableMargin,
      usedMargin: userFunds.usedMargin,
      availableCash: userFunds.availableCash,
      openingBalance: userFunds.openingBalance,
      payin: userFunds.payin,
      span: userFunds.span,
      deliveryMargin: userFunds.deliveryMargin,
      exposure: userFunds.exposure,
      optionsPremium: userFunds.optionsPremium,
      collateralLiquid: userFunds.collateralLiquid,
      collateralEquity: userFunds.collateralEquity,
      totalCollateral
    });

  } catch (error) {
    console.error("Error generating dynamic database funds data:", error);
    return res.status(401).json({ message: "Invalid or expired session token." });
  }
});

//Add Funds routes
app.post("/addFunds", async (req, res) => {
  try {
    const token = req.cookies.token;
    const { amount } = req.body;
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized." });
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      return res.status(400).json({ success: false, message: "Please enter a valid amount." });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
 const numericAmount = Number(amount);
    const updatedFunds = await FundsModel.findOneAndUpdate(
      { userId: decoded.id },
      { 
        $inc: { 
          availableMargin: numericAmount, 
          availableCash: numericAmount 
        } 
      },
      { returnDocument: 'after' } 
    );
    return res.status(200).json({
      success: true,
      message: `Successfully added ₹${numericAmount.toFixed(2)} to your account!`,
      data: updatedFunds
    });

  } catch (error) {
    console.error("Error adding funds to MongoDB:", error);
    return res.status(500).json({ success: false, message: "Server error. Try again." });
  }
});

app.use("/", authRoute );

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});