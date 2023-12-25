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

- Chúng ta viết APIs thì chúng ta tập trung vào `res.json()`

- Tổ chức `Router` trong dự án của chúng ta một cách `clean code` nhất có thể

- Sử dụng package `Http Status Code` để quản lí status của dự án

## Sử dụng Postman để test API Back-end

## Code tầng Validation: Dùng Joi để validate dữ liệu

- Back-end cũng phải luôn validate dữ liệu -> Điều này là tối quan trọng trong làm việc -> Back-end đương nhiên cũng phải validate dữ liệu ở trong code luôn

- Để mà validate dữ liệu thì à cái `API get List` chúng ta đang muôn validate dữ liệu từ `Request Body` của một cái form kiểu kiểu như là chúng ta làm một cái form để gửi lênn

- Nay sẽ tập trung vào thằng `POST` để tạo mới một `new board` -> Thì chúng ta phải nhận dữ liệu từ phía FE gửi lên

- Ở trong học phần này sẽ chỉ tập trung vào 2 thằng trong board đó là `title` và `description` -> Chúng ta sẽ tạo ra cái điều kiện để chúng ta validate dữ liệu của bên phía FE gửi lên là `title` và `description` -> Ở bắt lỗi cho `createNew` sẽ có nhiều dữ án người ta dùng mã `400` là `BAD REQUEST` cũng có nhiều thứ người ta dùng mã `422` `UNPROCESSABLE ENTITY` -> Team BE follow chuẩn trong team chúng ta làm thông thường sẽ sử dụng 422 là chuẩn rồi

- Vì chúng ta dùng method `POST` để dữ liệu lên thì chúng ta phải nhận dữ liệu từ phía BE thông qua một thứ là `req.body` -> truyền `req.body` vào `validateAsync` -> `await correctCondition.validateAsync(req.body)` -> Để nó kiểm tra `req.body` rằng cái dữ liệu từ phía FE gửi đi nó có phù hợp với cái điều kiện chúng ta validate hay không `correctCondition` -> Sau cùng là thực hiện hàm `next()` để đưa cái `request` của chúng ta sang một `tầng` xử lý mới ở phía `Back-end`

- Cần phải cho phép 1 cái `express.json()` đề có thể gửi `JSON` lên được
- Phải đọc docs và nghiên cứu docs thì mới có thể cải thiện được trình độ của chúng ta mà thôi

- Ở phần lỗi thì chúng ta chỉ cần `new Error(error).message` -> Cái chúng ta cần là `Message` của `Error` nên là chúng ta sẽ chỉ chấm tới message của cái lỗi đó thôi là được

- Vấn đề khá là hay trong buổi học về thằng Joi này là khả năng bảo mật - chính xác dữ liệu

  /\*\*

  - Note: mặc định chúng ta không cần phải custom message ở phía BE làm gì vì để ch8o FE tự validate và custom message phía Fe cho đẹp/
  - Back-end chỉ cần validate đảm bảo dữ liệu chính xác, và trả về message mặc định từ thư viện là được.
  - Quan trọng: việc validate dữ liệu BẤT BUỘC phải có ở phía back-end vì đây là điểm cuối để lưu trữ dữ liệu vào database
  - Và thông thường trong thực tế, điều tốt nhất cho hệ thống là hãy luôn validate dữ liệu ở cả Back-end và Front-end
    \*/

- Hướng dẫn custom luôn `message` -> Vì `message` lỗi trả về rất khó để đọc và thằng `Joi` hướng dẫn `custom message` cũng rất là dị cần phải research để có thể `custom message` được chuẩn chỉnh và đẹp hơn

- Cách chúng ta custom là cách chúng ta ghi đè lại `messages mặc định` của thằng `Joi` -> Nên là khi có lỗi thì chúng ta sẽ ghi đè lại `message lỗi` của thằng thư viện `Joi`

## Code tầng Controller: Điều hướng dữ liệu

- `Controller` như là một nơi để truyền dữ liệu đi đến các `tầng khác` để xử lý dữ liệu

- Test code trong `tầng Controller` rất hay -> Thì ở `Controller` chúng ta sẽ nhận `request` -> Sau khi nhân `request` thì có rất nhiều thế loại data `req.query` , `req.params`, `req.files` `req.cookies` , `req.jwtDecoded` -> sau khi đã có được dữ liệu này rồi thì chúng ta sẽ `điều hướng dữ liệu` sang `tầng Service` -> Sau đó trả về kết quả của một `endpoint-API` ở tầng `Controller` này -> Sau khi đã đi qua `Service` rồi `Model` thì nó sẽ lấy được dữ liệu từ `Database` và trả về cho `Client - Fronend` -> Những `data mà FE cần` để xây dựng lên giao diện người dùng

## Error handling: Middleware xử lý lỗi tập trung phía Back-end

- Xử lý Error Handling tập trung với những cái lỗi trả về -> Đa phần những ứng dụng nào cũng có xử lý lỗi tập trung như này để có thể bắt được lỗi

- Trong `expressJS` ở những chỗ `error` nếu như có những chỗ chúng ta muốn trả về lỗi -> Thì chúng ta `return error` hoặc là `next(error)` -> Thì thằng `expressJS` nó sẽ đưa về những chỗ `xử lý lỗi tập trung` ở file `Server`

- Việc bây giờ là cái `middleware error` chúng ta phải viết như thế nào cho nó `hợp lý` và `phù hợp`

- Tạo ra một biến `responseError` để kiểm soát các lỗi trả về -> Trước tiên trả về `statusCode`, tiếp theo là trả về một `messageError` (lát nữa sẽ học thêm về Error mặc định hoặc là ApiError) -> Tiếp theo là `error.stack` cái stack này như là một cái chuẩn kiểu để biết được - `trace(dấu vết - vết tích)` được cái lỗi của chúng ta nó đến từ đâu -> Những cái `error.stack` đôi lúc nó đúng - đôi lúc nó bị lồng nhau thì lại không đúng(đôi lúc khù khoằm) -> Nhưng mà có nó còn đỡ hơn không -> Để chúng ta thu hẹp cái `phạm vi` tìm ra lỗi trong ứng dụng

- Khi đi làm sẽ có những dự án ghi lỗi vào những cái file hằng ngày, nó lưu lại `hằng ngày` xong rồi nó xoá `hàng tháng` hay `hàng tuần` tuỳ -> Để khi mà có `sự cố` xảy ra thì chúng ta `debug code` -> Để `debug code` thì chúng ta phải đọc được lỗi -> Phần lỗi này sẽ được mở rộng rất là nhiều nên là cứ thoải mái

- Bây giờ vấn đề làm sao để chúng ta custom cái `statusCode` ở phần `messageError` lỗi trả về -> Sẽ custom cái `error.code` trong `NodeJS` thành cái `statusCode` của chúng ta -> Viết cái `class` kế thừa lại `class error` mặc định -> Sauu đó mở rộng ra một cái `Key` đó là `statusCode` của chúng ta

- `ApiError` -> Lưu lại stackTrace để đẩy vào `ApiError` của chúng ta

- Xử lý chỗ `boardValidation` -> Thì có thể lấy `error.message` hoặc là có thể lấy `new Error(error).message` thì 2 thằng này chúng ta lấy thằng nào cũng được

## Môi trường Dev & Production trong dự án vì sao lại quan trọng

- Thì ở phần này liên quan đến vấn đề bảo mật dữ án - những cái rất là nhỏ thôi nhưng nó liên quan đến `bảo mật code` - làm sao không để lộ `code` ra ngoài - những cái `key` trong biến môi trường

- Hôm nay sẽ học biến môi trường mới -> Tuy nhiên nó đặc biệt ở chỗ là nó sẽ là môi trường `Production` và `Dev` -> Đầu tiên là sẽ cần cài đặt thư viện `cross env` để quản lí môi trường làm việc này kia

- Tiếp theo chúng ta sẽ tạo ra biến môi trường để chúng ta phân biệt được là môi trường `Dev` hay là `Production` -> Biến môi trường này sẽ tạo và chạy nó trong mục `scripts` của file `package.json`

- Để mà đồng bộ hết mọi môi trường thì chúng ta phải sử dụng thư viện `cross-env` -> Sử dụng `BUILD_MODE=dev` để chúng ta kiểm tra luôn ở phần `errorHandling` luôn -> Nên là chúng ta sẽ học luôn biến môi trường ở phần này -> Tại vì ở `errorHandling` có ứng dụng vào dự án thực tế của chúng ta rồi nên là sẽ học luôn

- Nếu môi trường không phải là môi trường `Dev` thì chúng ta sẽ xóa cái `responseError.stack` đi và không trả về cho người dùng khi mà người dùng đang gọi tới cái `Side-Production` của chúng ta -> Nếu mà chúng ta để cái `stackTrace Error` thì họ sẽ biết phần nhiều cái cấu trúc của chúng ta -> Cái `stack` nó `show` ra rất là gõ cái `cấu trúc` thư mục của con `Back-end` của chúng ta -> Nên tốt nhất thì cái `BUILD_MODE=production` thì nên xóa đi -> Vì về sau nó không chỉ chia có mỗi môi trường `Production` không đâu -> Còn có môi trường `Beta`, `Staging`, hay môi trường riêng giành cho `Auto Test` hay `Test` > Nhưng mà cơ bản nhất sẽ là 2 môi trường là `Production` và `Development`

- Cái `BUILD_MODE` chạy trong `package.json` thì nó cũng lấy từ `process.env` ra

- Tóm lại ở môi trường `production` chúng ta khong show lỗi ra ở phía `Client` -> Đó là một kiến thức `bảo mật` rất `căn bản` thôi

## Code tầng Service: Xử lý Logic dữ liệu theo từng dặc thù dự án

- Tìm hiểu về tầng Service - Xử lý dữ liệu

- Ở cái tầng Service này có thể sử dụng function bình thường hoặc là function bất đồng bộ -> Nhưng đa phần chúng ta còn chọc vào `database` để query dữ liệu các kiểu (bất đồng bộ) -> Nên là sử dụng `function async`

- Khi đến `tầng Service` rồi thì thông thường không đây `req` hay `res` sang `tầng Service` để làm gì -> Service chính là cái tầng để chúng ta xử lý `logic` - tùy đặc thù từng function trong dự án - tùy từng chức năng -> Từ từ sẽ làm thêm `logic trong Service`

- Bây giờ sẽ điều hướng từ `Controller` sang `Service` -> Bây giờ thì ở service nó cần cái gì -> Thì ở `createNewBoard` cái nó cần ở đây chính là `title` và `description` -> Và ở `Service` chúng ta không đưa cả `request`sang , chúng ta chỉ đưa dữ liệu cần sang thôi -> Về sau còn nhiều `dữ liệu khác` thì chúng ta điều hướng từ `Controller` đưa sang

- Service nó có nhiệm vụ là thao tác với `Model` tạo ra các `Board` của chúng ta

- Ở `Service` nếu như mà có lỗi thì chúng ta sẽ không `next()` nó về `errorMiddleware` để xử lý nữa -> Chỉ đơn giản là chúng ta `throw` ra một `error` nếu có lỗi là được -> Vì đằng nào khi mà có lỗi thì `Controller` nó sẽ điều hướng sang chỗ `error Middleware` để xử lý lỗi tập trung (đẩy hết về controller) cho nó điều hướng -> Có kết quả thì nó trả về kết quả chuẩn - còn không thì đưa về chỗ xử lý lỗi tập trung ở `error handling middleware`

- Vì là xử lý dữ liệu và `Client` chỉ gửi lên cho chúng ta `title` và `description` mà thôi -> Nhưng mà giả sử trong `Model` của chúng ta chúng ta sẽ lưu thêm một số thứ khác mặc định -> Ví dụ như `title` chúng ta muốn chuyển nó về dạng `slug`

  - slug là gì cứ từ từ là chúng ta sẽ rõ -> `Slug` hiểu nôm na là nó `remove` dấu đi và nó biến thành chuỗi `string` `không dấu` được nối với nhau bởi `dấu gạch` - `-`
  - Slug là để chúng ta làm việc với `URL` của trang web

  - Ngoài việc sử dụng các `formatters` đã có sẵn về `slug` thì chúng ta còn có thể sử dụng thư viện để xử lý cái `slug` này

- Có những đoạn code đi làm sau này chúng ta cần phải sưu tầm lại -> để việc research trở nên dễ dàng hơn -> Cũng phải nên `research` để có thể tự học tự phát triển được nhiều thứ hơn nữa trong tương lai -> Phấn đấu để trở thành một `developer` thay vì là một `thợ code`

- Cái `Slug` thì `FE` sẽ không làm vấn đề này mà `BE` chúng ta sẽ làm luôn việc đó

- Và lưu ý rầng tất cả các hàm `Service` về sau đều phải có `return` -> Nếu không có return thì sẽ không có kết quả trả về cho `BoardController` -> Dĩ nhiên là sau này làm tới tầng `Model` thì còn nhiều vấn đề lắm

- Sau này có thê dùng `slug` để làm URL cho con `bot` bổ sung vào để làm `SEO` cho trang web

- Client chỉ gửi lên 1 2 dữ liệu thôi nhưng mà kết quả chúng ta lưu vào `DB` trả về có thể hàng chục dữ liệu là chuyện bình thường

- Đến tầng `Model` chúng ta sẽ được biết như là -> Ngoài việc chúng ta validate dữ liệu ở `tầng Validation` rồi mà đến `Model` chúng ta vẫn nên `Validate`

## Code tầng Model: Định nghĩa Collection Schema

- Hôm nay sẽ tạo `Model` trước ngày hôm sau sẽ đi thực hiện hành động `createNewBoard`

- Cái việc mà tạo `schema` trong `MongoDB` -> Đôi với MongodB chúng a không cần phải tọa `schema` mà có thể viết code và thêm dữ liệu vào luôn -> Nhưng biết đâu có những cái dự án mà chúng ta bi thiếu đi một vài trường như vậy thì sẽ hơi khó cho một vài bạn vừa học -> nên là chúng ta vẫn sẽ tạo `Model` ở trong dự án này mặc dù là với `MongoDB`

- Sẽ vẫn tạo ra `Schema` để hiểu được cái cách mà chúng ta tổ chức dữ liệu ở trong `Database`

- Việc chúng ta tổ chức dữ liệu ở bên trong `Model` thì nó cũng là một `JSON object` -> Chinh xác là JSON object rồi thì chúng ta sử dụng thư viện `Joi` để `defined` ra một cái `Schema` - `là một dạng JSON object` -> Trong `Model` vẫn là `JSON object` nhưng cái khái niệm của nó là một `Schema` - Còn trng `validation` thì vẫn như nhau thôi nhưng chúng ta đặt nó là một condition

- Tại sao chúng ta lại tạo lại cái `Schema` `Model` ở tầng Model này nữa thì ở các bài tiếp theo chúng ta sẽ rõ phần này

- Đoạn này `columnOrderIds: Joi.array().items(Joi.string()).default([])` nó còn liên quan đến `objectId` của `MongoDB` cơ - còn hơi dị một tí

- Hiện tại `Model` chưa `validate` -> Sẽ để ở lần sau sẽ `validate`

- Nhưngg mà khi ở trong MongoDB thì những thuộc tính có `Id` thường là sẽ có kiểu dữ liệu là `ObjectId` -> Nhưng mà khi thao tác với `MongoDB` thì những cái `boardId` đều phải bọc trong `ObjectId` ->

- Thay vì sử dụng thư viện khác để validate cho những `Key` như thuộc tính `boardId` -> Sử dụng thưu viện bên ngoài để validate cho trường `Id` của thằng `Joi` thì chúng ta có thể sử dụng cách nó `native` hơn, thú vị hơn và hay hơn -> Là chúng ta sẽ validate chuỗi string dấy với cái `regex pattern` - `biểu thức chính quy` -> Chúng ta sẽ bắt vào cái `Rules` này để chúng ta biết được cái chuỗi string chúng ta đẩy lên có phải là một kiểu `ObjectId` hay không

- Đây sẽ là cách mà chúng ta sẽ tìm kiếm và giải quyết vấn đề nảy giờ ->`How to validate Joi with ObjectId in MongoDB`

- Và lưu rằng những cái liên quan tới Id kiểu này

## Hoàn thành API create - Tạo mới bản ghi vào Database

- Trong hôm nay sẽ hoàn thiện các Api tạo mới `board`

- Thì đến phầnn `Model` này rồi thì không cần bắt `ApiError` một cách chính xác
  -> Thì nó hơi mắc công một tí, mắc công phải nghĩ ra `statusCode` -> Thường chúng ta sẽ để nguyên `throw new Error(error)` để chúng ta lấy được cái `stack.trace` để chúng ta biết được lỗi nó đang chạy ở đâu -> Chứ để throw error thì nó sẽ không có `stack.trace`

- Nếu mà có lỗii xảy ra ở tầng `Model` hay lỗi xảy ra ở `custom Error` ở `tầng Service`

- Sẽ nhận được `data` từ `Service` gửi sang -> Sau khi đã có hàm `createNew` từ `Model` rồi thì chúng ta sẽ import vào `Service` và xử lý

- Tiếp theo là nó sẽ phát sinh 1 cáii vấn đề đó là -> Thông thường đối với dự án khi mà ta tạo xong 1 `bản ghi - document` vào trong `MongoDB` thì cái `_id` luôn luôn là cái mà `MongoDB` tự tạo cho chúng ta -> Tuy nhiên khi mà chúng ta tạo xong 1 `bản ghi` không nhất thiết chúng ta phải trả về toàn bộ dữ liệu trong bản ghi cho `Client` - Đôi khi chỉ cần trả giống `Postman` trả về là được - cũng có thể gửi về thông báo là tạo mới thành công cũng được -> Nhưng đa phần trong các `dự án` sau khi tạo xong thì trả về `bản ghi` đó cho FE ngay lập tức -> Để FE thực hiện các `hành động` trả ra `trình duyệt` cho người dùng

  - Nên bây giờ chúng ta cần phải làm thêm `hành động` nũa dựa vào `insertedId` mà `MongoDB` trả về -> Chúng ta phải query vào `database` để lấy full cái `bản ghi` này về -> Rồi trả về cho người dùng

- Thằng insertedId bản chất nó là một `new ObjectId` -> Nên là khi `findOne()` thì chúng ta cần phải truyền vào cho một `id` có kiểu là `ObjectId` -> Còn không thì thằng `MongoDB` nó sẽ không nhận biết được

## Tại sao nên check data ở cả Validation và Model Schema - Cái này quan trọng

- Sẽ hiểu tại sao các giá trị `createdAt`, `updatedAt`, `_destroy` nó vẫn chưa có trong bản ghi của chúng ta -> Sẽ được giải thích cận kẽ

- Chúng ta sẽ xử lý thằng `findOneById` ở `boardModel` trước -> Nếu như thằng `insertedId` . `toString()` hoặc là sau này có thể nhận những cái `Id` từ phía `Client` gửi lên đưa `Id` lên sau đó lấy `dữ liệu` về -> Người ta đang tìm kiếm một cái `board` ngta gửi `Id` kiểu dữ liệu là `String` lên -> Cho nên kết quả tìm kiếm nó sẽ ra là `null`

- Vậy thì cái cách giải quyết như nào khi mà người dùng gửi lên một cái `Id` có kiểu là `ObjectId` để lấy ra cái `board` cụ thể -> Thì cách đơn giản là chúng ta sử dụng kiểu `ObjectId` của thằng `MongoDB` -> Nếu mà truyền vào `ObjectId` rồi mà kết quả vẫn bọc vào `ObjectId` thì kết quả vẫn như vậy thằng `MongoDB` nó đã xử lý chỗ này rồi -> Vậy là xong vấn đề dùng `ObjectId` khi tìm kiếm dữ liệu

- Những giá trị trong mảng `board` không có giá trị mặc định là vì khi chúng ta `createNewBoard` thì chúng ta chưa `validate` dữ liệu cho nó -> Thì cái việc `validate` ở `Model` thì không khác gì chúng ta chạy ở tầng Validate dữ liệu

- Thì trước khi chúng ta gọi tới `Database` để `lưu dữ liệu` thì chúng ta sẽ `validate`

- Vì vậy sẽ quay lại cái vấn đề là tại sao Validate ở `tầng Validation` rồi mà đến tầng `Model` vẫn `validate` tiếp -> Hình dùng rằng ở `Validation` thì thằng `client` nó gửi lên cái gì thì mình `validate` cái đấy trước rồi mình mới gửi qua `Controller -> Service -> Model` -> Còn validate ở `Model` nó giống như validate ở `validation` ngoài ra nó còn `validate` thêm những dữ liệu khác cho nó `chuẩn chỉnh`

- Rồi cái thứ 2 ở phần `xử lý Service` -> Hình dung sau này có người mới `Join` vào dự án của chúng ta thì những người mới cái việc ngta `xử lý` những cái `logic` trong `Service` có thể không may người ta xử lý sai dữ liệu -> Ví dụ title chạy qua tầng `Validation` không có vấn đề nhưng khi nó qua đến tầng `Service` và nó bị `chỉnh sửa` lại thì đến tầng `Model` nó lại `validate` lần nữa rất `cẩn thận và chỉnh chu` trước khi chúng ta `lưu trữ` dữ liệu vào `database`
