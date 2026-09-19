const mongoose = require("mongoose"); 
const { holdingsSchema } = require("../schemas/holdingsSchema.js");

const HoldingsModel = mongoose.model("Holding", holdingsSchema);

module.exports = HoldingsModel;
