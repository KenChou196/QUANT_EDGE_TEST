ver 1.0:
+ project sử dụng framework reactjs.
+ phần mềm yêu cầu : npm,node,xampp,navicat
+ cách start app: 
 - trong thư mục chứa source code (QUANT_EDGE_TEST) mở giao diện cmd,gõ lệnh : npm install hoặc yarn (nếu máy có sử dụng yarn ) để cài đặt thư mục node module.
 - sau khi cài đặt xong gõ lệnh : npm start để start app
 -tiến độ : 
	- hoàn thành giao diện,
	- xử lý xong phần biến động về giá (price) và lượng (volume ) theo yêu cầu,
 -công việc còn lại : 
	- viết service và thiết kế db,thay dữ liệu cứng bằng dữ liệu được request về.
	- rà soát lỗi nếu có.
--------------------------------------------------------------------------------------------------------------------------------------
ver 2.0 :
+ trong thư mục client và server bật cửa sổ cmd để chạy lệnh "yarn" hoặc "npm install" để tải về thư mục node module tương ứng.
+ cài đặt node js để start server.
+ cài đặt xampp,khởi động và start apache + mysql.
+ server viết bằng node js.
+ tạo database theo thông tin sau : 
	-thông tin database : 
		user: "root",
    		password: "",
    		database name: "quant_edge",
+ sử dụng navicat để bung (execute sql file ) file database/quant_edge.sql để retore lại database.
+ start : 
	server : trong thư mục server  bật cửa sổ command gõ lệnh " node index.js ".
	client : trong thư mục client bật cửa sổ command gõ lệnh " npm start ". 
-----------------------------------------------------------------------------------------------------------------------------------------
ver 3.0 : 
+ update tính năng lựa chọn top 20,dữ liệu ghi nhận luôn khi có thay đổi và đảm bảo yếu tố top 20.
+ danh sách gốc chứa 30 mã giao dịch,hiển thị 25 mã ở trạng thái bình thường,20 mã khi lựa chọn sắp xếp.
+ update database.
+ start app theo hướng dẫn ver 2.0.
    					