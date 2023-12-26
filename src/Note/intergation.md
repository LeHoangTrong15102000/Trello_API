# Thực hiện tích hợp API vào trang ứng dụng Trello

## Viết API Get Board Details - Bước đầu tích hợp vào Front end

- Riêng học phần tích hợp này thì nó mix giữa FE và BE -> Riêng chỉ học BE không thì nó thiếu rất là nhiều kiến thức về sau

- Sẽ học cách ghép chuẩn chỉnh và hoàn hảo các đầu `API` `back-end` vào phía FE -> Để chúng ta nắm được toàn bộ `xử lý` dữ liệu `request` các thứ từ FE đến BE để nó phù hợp với đặc thù của dự án

- Hôm nay sẽ tạo nhanh một cái API để chúng tá lấy ra một cái board cụ thể -> Rồi sau đó gọi cái API board cụ thể đó và đổ vào FE

- Thì có những cái request không phải lúc nào cũng phải chạy sang Validation rồi mới sang `Controller` vì người dùng chỉ gửi cái ID lên và l-ấy Board về thôi nên là không cần thiết -> Nhưng thực ră vẫn có thể bỏ vào `Validation` được nhưng nó không cần thiết -> Chúng ta cứ `query Model` nếu không tồn tại board ở đấy thì trả về `message lỗi` hoặc là giá trị board không tồn tại

- Sẽ lấy cái `boardId` ra từ `params`

- `Aggregate` là một `query` tổng hợp để lấy toàn bộ `Columns` và `Cards` thuộc về `Board` -> `MongoDB` nó sử dụng `aggregate` để `JOIN` các `collection` với nhau

## Axios: Gọi API từ phía Front-end sao cho Clean code

## CORS đâu có lỗi lầm gì | rất nhiều người đang hiểu nhầm về CORS

- Nếu mà cấu hình CORS như vậy là chúng ta cho phép ai cũng có thể vào và lấy tài nguyên được => Trong thực tế thì chúng ta phải cấu hình bảo mật cao hơn

- Nếu chúng ta chỉ chặn một số `route` nào đấy thì chúng ta thêm `CORS()` vào sau cái `endpoint`

- Dynamic origin -> Chính xác là chúng ta sẽ tạo ra một cai mảng `whiteList` domain -> Ngoài ra còn hỗ trợ `DEV` `Postman` các kiểu nữa

## Aggregate: Query tổng hợp, Join dữ liệu giữa các Collection

- Quan trọng của buổi hôm nay là hiểu được dạng `query tổng hợp` - `aggregate` -> Vì vậy chúng ta không cần dùng hàm `findOneById` nữa

- Cái type sau này cũng cho phép người dùng chọn và hiển thị ra màn hình -> Thì thằng type chúng ta chỉ định nó là `public hoặc là private` thôi còn nếu người dùng chọn vài cái khác thì chúng ta sẽ báo lỗi ngay -> Thường thì sẽ giống thằng `Enum` chỉ định 0 hoặc là 1

- Vào cái `getDetails` thực hành cái `aggregate` tổng hợp -> nhận vào `tham số` là một `cái mảng` vì nó là `query tổng hợp` - tổng hợp của nhiều cái điều kiện của chúng ta ở đây -> Nó sẽ có khoảng 3 cặp ngoặc nhọn

- Tìm một cái bản ghi với cái `_id` này với cái `_destroy là false` -> Nếu mà sau này chúng ta xóa cái `Board` đi và trả về `_destroy là true` thì nó sẽ không trả lại cái `board` đó cho chúng ta -> Thì ở cái toán tử `$match()` giống như là một `findOne()` để tìm ra cái `board` cụ thể -> Sau đó tìm thêm `column` và `card` nữa

  - localField: là cái `field` ở cái `Collection` hiện tại ở đây chúng ta đang làm cho cái `board` thì `localField chính là cái board` của chúng ta và ta lấy ra `_id`

  - `foreignField` nó giống như là cái khóa ngoại cái mà chúng ta tìm đến `Collection bên column` bên column chúng ta lưu cái bản ghi `boardId` để mà chúng liên kết với thằng `board`

  - Thì localField bên `board` sẽ là `_id` còn `foreignField` bên đây sẽ là `boardId` -> Hiểu đơn giản là một cái là chúng ta đang đứng tại hiện tại để `query` còn 1 cái là chúng `query` từ cái `collection` khác mà chúng ta đang tìm kiếm

  - Còn cuối cùng `as` output trả ra là một cái `array field` và chúng ta sẽ cho nó một cái `key` -> Ví dụ như mảng chứa các column thì cái `key` của nó sẽ là `columns`[] vì trong mảng chứa nhiều `column` -> Nó sẽ sang thằng `Collectio Column` tìm toàn bộ cái `column` nào có `boardId` là `_id` của board mà chúng ta đang đứng -> Và nó sẽ lấy những cái `column` thuộc về nó để nó trả về cho người dùng

  - Tất nhiên là chúng ta có thể dùng cách khác để lấy ra `column` và `card` thuộc cái `board` đó -> Nhưng cái cách tối ưu nhất vẫn là `query tổng hợp` -> Bên dưới thằng `MongoDB` sẽ làm việc lấy dữ liệu và `transform` ra dữ liệu cho chúng ta

  - Và lưu rằng phía sau `aggragate()` phải chấm `toArray()` để nó mới trả ra dữ liệu chuẩn cho chúng ta

  - Và lưu rằng return về `result[0]` vì thằng `aggregate()` nó trả về một cái mảng nên là chúng ta sẽ lấy phần tử đầu tiên nếu nó có trả về giá trị -> Vì ở đây là chúng ta lấy ra một cái `board` và `_id` nó là `unique` -> Nên nếu có trả về dữ liệu thì nó cũng trả về `1 giá trị` -> Vì thằng `aggregate` nó sẽ trả về một mảng -> Nên là chắc chắn thì cứ lấy phần tử đầu tiên

  - Sau này làm tính năng xoá `board` -> biến `_destroy: true` thì sẽ không `query` ra nữa

- Buổi tới sẽ làm chức năng thêm `Column` và thêm `Card`

- Hôm nay để mà chúng ta test trước -> Chúng ta tập trung vào cái `aggregate query` tổng hợp thì chúng tat sẽ `fake data`

- Chúng ta thấy 2 thằng `Columns` nó đang nằm cùng cấpp với nhau -> Nhưng mà trong cái cấu trúc dữ liệu của chúng ta thì `cards` nằm trong `columns` -> Frontend làm một kiểu trả về và Backend làm một kiểu trả về -> Đây là một trường hợp thực tế -> Thì `FE` làm luôn cũng được -> Nhưng nếu mà tốt hơn thì `BE` làm giùm chúng ta để chúng ta đỡ hơn một tí

- Cấu trúc dữ liệu này làm ở phía FE cũng được vì đây là cấu trúc đặc thù ở phía `FE` còn `BE query theo kiểu kia` trả về cho chúng ta nhanh gọn theo kiểu kia -> Còn đây chúng ta đặt vị trí của mình làm luôn cả `FE` lẫn `BE` nên là chúng ta hiểu hết được cấu trúc của `FE` và `BE`

- Để làm dữ liệu cho chuẩn trả về thì chúng ta sẽ xử lý ở đâu -> Thì chúng ta sẽ xử lý ở `boardModel` cụ thể hơn là tầng `Service - boardService` -> Vì `boardModel` trả dữ liệu về cho `boardService` -> Và bây giờ chỉ cần xử lý ở `boardService` nữa là xong -> Trước khi chúng ta trả về cho `FE` thì chúng ta sẽ xử lý dữ liệu nó đi sao cho giống với cấu trúc mà phía `FE` cần.

- Sử dung hàm `cloneDeep` của `lodash` để xử lý cho cấu trúc dữ liệu mà `FE` cần -> Dùng `cloneDeep` để không ảnh hưởng tới cái `board` ban đầu -> Thông thường đối với `dữ liệu biến đổi` tốt nhất là đừng để nó `ảnh hưởng` tối dữ liệu ban đầu.

- Đôi lúc biến đổi dữ liệu xong ta so sánh `dữ liệu` biến đổi đó với `dữ liệu ban đầu` xem nó có thay đổi gì không

- Sau khi cloneDeep cái `board` thì chúng ta tiến hành đưa `card` về đúng cái `column` của nó -> Sau khi đã lập qua và tạo ra một `cards` trong column rồi thì sau đó chúng ta sẽ xoá cái `cards` nằm c

- Cách thứ 2 để so sánh mà không cần phải chuyển kiểu dữ liệu về `string` bằng cách sử dụng `toString()` nữa

## Tạo UI/UX thêm mới Column & Card trong ứng dụng Trello

- UI click vào hiển thị `Input` các thứ -> Rồi tạo `column` và `card` sau -> Để buổi tới chúng ta viết `APIs` sau

## React-Toastify: Hiển thị Flash Message chuyên nghiệp

## Viết 2 APIs tạo Column & Card trong ứng dụng Trello - phần 1

- Buổi hôm nay chủ yếu là chúng ta `copy code` rất là nhiều

- Sau này đi làm nó sẽ có những cái API mới nó được base lên từ cái API cũ -> Nên việc chúng ta `copy paste` là điều `bình thường` -> Copy paste để tiến độ công việc được nhanh hơn thôi chứ không có xấu

- Khi mà tạo xong thằng bản ghi `Column` thì cái `boardId` nó phải có kiểu dũ liệu là `ObjectId` đồng thời thì thăng `columnOrderIds` nó phải được cập nhật column mới được tạo

## Viết 2 APIs tạo Column & Card trong ứng dụng Trello - phần 2

- Đối với những cái `Id` thì kiểu dữ liệu luôn phải là `ObjectId`

- thằng `findOneAndUpdate` nó sẽ trả bản ghi thông qua kết quả nhưng mà phải chấm `.value` nó khác với thằng `aggregate` là nó trả về một `result[0]`

- Ở thằng `ColumnService` trỏ tới `pushColumnOrderIds` mình chỉ nó trả về kết quả thôi chứ chúng ta không hứng kết quả -> Chỉ cần cái hàm `pushColumnOrderIds` chạy đúng là được

- Ở thằng `findOneAndUpdate` ở đợt tới chúng ta cũng sẽ làm là `updateColumn` và cũng sử dụng thằng `findOneAndUpdate` này -> Và thằng này nó có một giá trị là `returnDocument` thì thằng này nó sẽ trả về một `document` mới hiểu nôm na là một `bản ghi` mới sau khi chúng ta cập nhật nếu chúng ta set `returnDocument` là `after` -> thêm cái này vào để báo với MongoDB rằng là t muốn lấy cái `bản ghi` sau khi được cập nhật

  - Còn nếu để `returnDocument`: `before` nó sẽ lấy bản ghi `original(ban đầu)`

- Vậy đã hoàn thành việc thêm `columnId` vào trong mảng `columnOrderIds` rồi -> Nên việc tương tự là thêm `cardId` vào trong `cardOrderIds`

## Ghép 2 APIs tạo Column & Card vào giao diện Trello - phần 1

## Ghép 2 APIs tạo Column & Card vào giao diện Trello - phần 2

## Fix bug kéo thả khi cần bôi đen Text bằng chuột

## Hoàn thiện tích hợp kéo thả Card với API - phần 1z

## Hoàn thiện tích hợp kéo thả Card với API - phần 2

## Kỹ năng Debug gỡ lỗi quan trọng của lập trình viên

## Xoá Column và Card, code chi tiết từ FE tới BE

## Xoá ColumnId trong Board - phần bổ sung

## Deploy miễn phí NodeJS Back-end APIs lên Render

## Deploy miễn phí ReactJS Front-end lên Vercel