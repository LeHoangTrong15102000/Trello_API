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

## Đóng kết nối MongoDB Atlas trong dự án Back-

- Tận dụng cái `Close Connection` như thế nào một cách hợp lý trong ứng dụng Nodejs của chúng ta

- Trên docs của `MongoDB` client sẽ `Close` khi bạn `finish` hoặc là `error` -> Rồi vấn đề là khi nào chúng ta sẽ `finish` `Server` và `finish` để làm gì và `error` để làm gì/

- Sau 1 `APIs` thì chúng ta lại thực hiện lại thành động `Connect` tới database xong rồi lại `Close` database -> Thành động này cứ lặp đi lặp đi lại sau mỗi `APIs`

- Đợt trước có dạy `MERN` rồi cũng không `Close Client` tới `cloud` -> Và nó không có vấn đề gì hết -> Tuy nhiênn sau nó vẫn sinh ra cái `Close` này

- Khi mà con Server của chúng ta bị `shutdown` hay bị `crash` -> Thì chúng ta sẽ `Close Connection` của thằng `MongoDB` tại đây

- Đến giải phải khi cho `clean-up` khi chúng ta dừng `server Nodejs` lại

- Thu viện Async-exit-hook nó sẽ cover cho chúng ta những trường hợp như `ctrlC` các thứ và những cú pháp mà những người trện `stackOverflow` chỉ

- Và thực sự là đơn giản khi phải viết một đóng code như trên stackOverflow -> Chỉ bằng cách sử dụng async-exit-hook

- Trong phạm vi của START_SERVER thì chúng ta gọi exitHook -> Thì nó vẫn chạy vào đâ process.exit(0) sau đó nó chạy vào exitHook -> Nó vẫn chạy vào exitHook mục địch là chúng ta đóng cái `Connection của thằng MongoDB` tại đây

- Cần cái hàm dể đóng thằng `MongoDB` lại -> Một cái hàm thứ 3 đóng kết tới Database khi cấn -> `CLOSE_DB` để đóng kết nối tới `Database`

- Đây là cách chúng ta `Close Database` khi nào -> Khi chúng tá dừng thẩng ứng dụng `NodeJs` bằng `Ctrl C` chẳng hạn (khi chúng ta dừng cái terminal) lại -> Mộtt trường hợp nào đấy con BE nó chết - `crash app` hay là chúng tá chủ động chúng ta tắt nó đi -> Thì nó sẽ đi vào `exitHook` thì thằng này nó cover lại đủ các tín hiệu -> Rồi nó sẽ đóng k ết nối tới `MongoDB`

## Tổ chức biến môi trường ENV đúng cách

- Giải quyết cái biến môi trường `ENV` trong dự án của chúng ta -> Sao cho cái code của chúng ta tổ chức quản lí cái biến môi trường như thế nào để cho nó `tối ưu` về sau

- Trong tương lai sẽ viết những cái script nó k hông phụ thuộc vào con `Server` đang chạy của chúng ta cả, những cái file `Script` riêng -> Nhưng cái kịch bản mà chúng ta chạy riêng, chạy jobs hoặc là fix một cái data nào đấy trong cơ sở dữ liệu -> Thì chúng ta sẽ tạo ra những cái file không ảnh hưởng đến thằng `Server` nữa.

- Chúng ta không muốn phải gọi các import 'dotenv/config' trong tất cả các file có gọi đến biến môi trường nữa => Nên là chúng ta sẽ tạo ra một file/ tổ chức ra một file để lưu trữ các biến môi trường -> Để có thể nhìn trực quan được các biến môi trường song song với file `.env` của chúng ta -> Tạo ra file `environment.js` để lưu và tổ chức các biến môi trường

## Viết API với Express Router, hiểu HTTP Status Codes

## Sử dụng Postman để test API Back-end

## Code tầng Validation: Dùng Joi để validate dữ liệu

## Code tầng Controller: Điều hướng dữ liệu

## Error handling: Middleware xử lý lỗi tập trung phía Back-end

## Môi trường Dev & Production trong dự án vì sao lại quan trọng

## Code tầng Service: Xử lý Logic dữ liệu theo từng dặc thù dự án

## Code tầng Model: Định nghĩa Collection Schema

## Hoàn thành API create - Tạo mới bản ghi vào Database

## Tại sao nên chekc data ở cả Validation và Model Schema
