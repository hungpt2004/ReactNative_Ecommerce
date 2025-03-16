const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
    notifType: {
        type: Number,
        required: true,
        enum: [1, 2, 3], // Chỉ chấp nhận các loại thông báo hợp lệ
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    time: {
        type: Date,
        required: true,
        default: Date.now, // Mặc định là thời gian hiện tại
    },
    read: {
        type: Boolean,
        default: false, // Mặc định là chưa đọc
    }
});

// Xuất mô hình
module.exports = mongoose.model("Notification", NotificationSchema);
