# NodeJS - Thực chiến trong các dự án thực tế

## Babel là gì - Vì sao nó lại quan trọng và cần thiết ?

- Giúp chúng ta bundle code ra để có thể chạy được trên các trình duyệt cũ cũng như trình duyệt mới -> Sẽ đưa về những cái `chuẩn JS` mới nhất

- `Clean` sinh ra là chúng ta muốn clean lại thư mục build -> Có nghĩa cái trước đó chúng ta code là như thế này -> Sau đó chúng ta sửa code này kia linh tinh các thứ -> Thì chúng ta phải `clean` cái thư mục cũ đi và `tạo ra` cái thư mục `build mới` thì chúng ta sử dụng -> `yarn clean`

## Tips thiết kế cơ sở dữ liệu NoSQL

- Cách thiết kế cơ sở dữ liệu NoSQL sao cho chuẩn -> Học cách thiết kế chuẩn khi đi làm thực tế luôn

- Không có dự án nào mà thiết kế cơ sở dữ liệu nó hoàn hảo ngay từ đầu được -> Nên là cứ an tâm nếu trong lúc làm mà có vấn đề thì có thể sửa được -> Nhiều người vẫn cứ thiết kế nó hoàn hảo ngay từ đầu rồi mới bắt đầu code

## MongoDB và Mongoose - Đừng nhầm lẫn nữa

- So sánh

## MongoDB Atlas Cloud Database - Nên dùng hay không ?

## Tạo cơ sở dữ liệu MongoDB Atlas Cloud gói free 512MB storage

## Điểm qua nhanh MongoDB compass và NoSQL Booster

## Tối ưu kết nối MongoDB Atlas vào dự án Back-end

- Đoạn code mẫu dùng để kết nối với MongoDB ở bên trong tài liệu của thằng `MongoDB` -> Thì có đoạn nó cho chạy server mãi(gần như cho nó chạy mãi) -> Dĩ nhiên là trừ khi code bị chết hoặc là Crash App thế nào đó -> Thì chúng ta mới chạy lại -> Nói chúng là chúng ta cứ luôn luôn chạy -> Mà chúng ta cứ connect rồi chạy một hành động ví dụ như `Đăng nhập User` xong rồi `đóng kết nối đến cơ sở dữ liệu lại` rồi `fetch User về` rồi `lại mở kết nối` rồi `đóng kết nối lại` -> Nói chúng nó sẽ phức tạp ở cái vấn đề là làm sao có một cái `design pattern` - `pattern code` làm sao cho nó đóng cái `MongoDB Connection` một cách hợp lý

- Hôm nay sẽ học cách `Connection Database MongoDB` với cái `Pattern` cực kì hay -> Sẽ áp dụng vào dự án `thực tế` nên sẽ học hỏi được rất là nhiều thứ

- Lần sau sẽ thực hiện `Close Connection Database MongoDB`

- Mục đích tạo ra biến `trelloDatabaseInstance` lấy được cái `Database` của chúng ta là cái `trello-hoangtrongdev-mern-stack` -> Và sau đó chúng ta mới thao tác vào trong `Database` này của chúng ta -> Vì vậy chúng ta mới tạo ra riêng một biến `trelloDatabaseInstance` giành riêng cho `trello-hoangtrongdev-mern-stack` của chúng

- Cái Stable Api Verion giống như là -> Khi chúng ta `sử dụng` version `MongoDb 7.0` và gọi tới cái `method` nào đó ở `version 6` không còn sử dụng nữa ở `version 7` thì cái `DeprecationErrors` nó sẽ báo lỗi cho chúng ta -> Vì vậy nó liên quan đến chỉ định một cái `Stable Api Version` có thể dùng hoặc không

- Mặc định cứ hiểu là nó kết nối đã thành công rồi -> Thì lúc này `trelloDatabaseInstance` sau khi đã chờ `connect()` xong rồi thì lúc này `mongoClientInstance` đã kết nối tới cơ sở dữ liệu thì chúng ta sẽ chấm tới `db()` -> Rồi truyền `DATABASE_NAME` vào trong `db()`

- Sau này code chúng ta sẽ đi từ cái function `START_SERVER` đi ra -> Cho dù chúng ta có tách nhỏ code

- Nó còn cách viết hay của cái `ConnectDB` để chúng ta có thể biết thêm -> Nó được gọi là IIFE -> Là biểu thức mà hàm khai báo sẽ được gọi ngay lập tức sau khi được định nghĩa -> Thường sẽ được khai báo trong một cặp dấu ngoặc đơn `(5)`

## Đóng kết nối MongoDB Atlas trong dự án Back-end

## Tổ chức biến môi trường ENV đúng cách

## Viết API với Express Router, hiểu HTTP Status Codes

## Sử dụng Postman để test API Back-end
