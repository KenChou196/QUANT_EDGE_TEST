ver 1.0:
+ project sử dụng framework reactjs.
+ phần mềm yêu cầu : npm
+ cách start app: 
 - trong thư mục chứa source code (QUANT_EDGE_TEST) mở giao diện cmd,gõ lệnh : npm install hoặc yarn (nếu máy có sử dụng yarn ) để cài đặt thư mục node module.
 - sau khi cài đặt xong gõ lệnh : npm start để start app
 -tiến độ : 
	- hoàn thành giao diện,
	- xử lý xong phần biến động về giá (price) và lượng (volume ) theo yêu cầu,
 -công việc còn lại : 
	- viết service và thiết kế db,thay dữ liệu cứng bằng dữ liệu được request về.
	- rà soát lỗi nếu có.
ver 2.0 :
+ thiết kế database và webserver,
	-thông tin database : 
		user: "root",
    		password: "",
    		database name: "quant_edge",
+ sử dụng navicat để bung (execute sql file ) file database/quant_edge.sql để retore lại database.
+ cài đặt xampp,khởi động và start apache + mysql.
+ start : 
	server : trong thư mục server  bật cửa sổ command gõ lệnh " node index.js ".
	client : trong thư mục client bật cửa sổ command gõ lệnh " npm start ". 
    					