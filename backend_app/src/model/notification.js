const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Notification must have title"] },
  content: {type: String},
  category: {type: String, required: [true, "Notification must have specific category"]}
});

module.exports = mongoose.model("Notification", NotificationSchema);
