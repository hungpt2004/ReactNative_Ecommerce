const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ["Processing", "Shipped", "Delivered", "Cancelled"], default: "Processing" },
  paymentStatus: { type: String, enum: ["Pending", "Completed", "Failed"], default: "Pending" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);
