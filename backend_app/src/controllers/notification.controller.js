const Notification = require("../model/notification");

// Lấy danh sách thông báo
exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tạo thông báo mới
exports.createNotification = async (req, res) => {
    try {
        const newNotif = new Notification(req.body);
        await newNotif.save();
        res.status(201).json({ message: "Notification created successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Đánh dấu đã đọc
exports.markAsRead = async (req, res) => {
    try {
        await Notification.findByIdAndUpdate(req.params.id, { read: true });
        res.status(200).json({ message: "Notification marked as read" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Xóa thông báo
exports.deleteNotification = async (req, res) => {
    try {
        await Notification.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Notification deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
