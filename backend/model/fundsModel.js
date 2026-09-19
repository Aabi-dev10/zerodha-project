const mongoose = require("mongoose");

const FundsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true
  },
  availableMargin: { type: Number, default: 50000.00 },
  usedMargin: { type: Number, default: 0.00 },
  availableCash: { type: Number, default: 50000.00 },
  openingBalance: { type: Number, default: 50000.00 },
  payin: { type: Number, default: 0.00 },
  span: { type: Number, default: 0.00 },
  deliveryMargin: { type: Number, default: 0.00 },
  exposure: { type: Number, default: 0.00 },
  optionsPremium: { type: Number, default: 0.00 },
  collateralLiquid: { type: Number, default: 0.00 },
  collateralEquity: { type: Number, default: 0.00 }
});

const FundsModel = mongoose.model("Fund", FundsSchema);
module.exports = FundsModel;
