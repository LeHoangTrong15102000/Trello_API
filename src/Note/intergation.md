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
