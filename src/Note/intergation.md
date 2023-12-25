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

  - foreignField nó giống như là cái khóa ngoại cái mà chúng ta tìm đến `Collection bên column` bên column chúng ta lưu cái bản ghi `boardId` để mà chúng liên kết với thằng `board`

## Tạo UI/UX thêm mới Column & Card trong ứng dụng Trello

## React-Toastify: Hiển thị Flash Message chuyên nghiệp

## Viết 2 APIs tạo Column & Card trong ứng dụng Trello - phần 1

## Viết 2 APIs tạo Column & Card trong ứng dụng Trello - phần 2

## Ghép 2 APIs tạo Column & Card vào giao diện Trello - phần 1

## Ghép 2 APIs tạo Column & Card vào giao diện Trello - phần 2

## Fix bug kéo thả khi cần bôi đen Text bằng chuột

## Hoàn thiện tích hợp kéo thả Card với API - phần 1

## Hoàn thiện tích hợp kéo thả Card với API - phần 2

## Kỹ năng Debug gỡ lỗi quan trọng của lập trình viên

## Xoá Column và Card, code chi tiết từ FE tới BE

## Xoá ColumnId trong Board - phần bổ sung

## Deploy miễn phí NodeJS Back-end APIs lên Render

## Deploy miễn phí ReactJS Front-end lên Vercel
