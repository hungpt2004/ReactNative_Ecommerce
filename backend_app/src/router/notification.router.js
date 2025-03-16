const express = require("express");
const NotificationController = require("../controllers/notification.controller"); // Kiểm tra đường dẫn!

const router = express.Router();

// Đảm bảo rằng các function tồn tại trong NotificationController
router.get("/", NotificationController.getNotifications);  // Kiểm tra lại tên function
router.post("/", NotificationController.createNotification);
router.put("/:id/read", NotificationController.markAsRead);
router.delete("/:id", NotificationController.deleteNotification);

module.exports = router;
