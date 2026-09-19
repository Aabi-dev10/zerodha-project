const mongoose = require("mongoose");
const { positionsSchema } = require("../schemas/positionsSchema.js"); 

const PositionsModel = mongoose.model("Position", positionsSchema);

module.exports = PositionsModel;
