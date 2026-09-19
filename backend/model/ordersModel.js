const mongoose = require("mongoose");
const { ordersSchema } = require("../schemas/ordersSchema.js"); 

const OrdersModel = mongoose.model("Order", ordersSchema);

module.exports = OrdersModel;
