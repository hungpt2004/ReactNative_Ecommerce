📍 1. Khởi động dự án
Trước tiên, cài đặt các thư viện cần thiết:

bash
コピーする
編集する
npm install
Sau đó, chạy server:

bash
コピーする
編集する
npm start
Mặc định, ứng dụng chạy trên http://localhost:3000.

📌 2. Danh sách đường dẫn để test giao diện (EJS)
🏠 1. Trang chủ
URL: http://localhost:3000/
Mô tả: Hiển thị trang chủ của hệ thống.
📋 2. Danh sách các booking
URL: http://localhost:3000/books
Mô tả: Hiển thị danh sách các phòng đã đặt.
📝 3. Trang đặt phòng mới
URL: http://localhost:3000/books/bookRoom
Mô tả: Hiển thị form để đặt phòng karaoke.
✏️ 4. Trang cập nhật booking
URL: http://localhost:3000/books/updateRoom/:id
Ví dụ: http://localhost:3000/books/updateRoom/65ff1b23a9b1a2c3d45678ef
Mô tả: Hiển thị form để chỉnh sửa thông tin một booking.
❌ 5. Xác nhận xóa booking
URL: http://localhost:3000/books/delete/:id
Ví dụ: http://localhost:3000/books/delete/65ff1b23a9b1a2c3d45678ef
Mô tả: Hiển thị trang xác nhận trước khi xóa booking.
