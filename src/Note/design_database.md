# Thiết kế schema Trello bằng MongoDB - Design Database for Trello

## Phân tích chức năng cho Trello Board

- Khi mà làm dự án Back-end thì chúng ta cần phải lên được thiết kế cơ sở dữ liệu (database schema) -> Dù cho cái bảng thiết kế đó không hoàn hảo ngay từ đầu -> Không có cái dự án nào mà cái thiết kế cơ sở dữ liệu có thể hoàn hảo ngay từ đầu được (có thể yên tâm)

- Chia sẻ về những dự án thực tế -> Mới đầu chúng ta có thể chạy lên một vài tính năng -> Để cái dự án đấy nó đưa ra cho khách hàng sử dụng(version 1) -> Sau khi khách hàng dùng rồi khách hàng `phản ánh` cái này cái kia `(Với những người nhiều năm kinh nghiệm cũng chưa chắc cover được hết các trường hợp)` - khách hàng người ta cần lên `cái vấn đề này` và `cái vấn đề kia` - thay đổi `như này` cho `phù hợp`, thay đổi `kia` cho phù hợp -> Tùy vào các `giai đoạn` thời điểm nó thịnh hành thế này thế kia -> Thì cái `cơ sở dữ liệu` chúng ta `phải đáp ứng` cho `đầy đủ`

- Thế nên là `Developer` `khó` có thể `thay thế` được -> Vì các `business logic` nó cực kì phức tạp

- Những tips thiết kế cơ sở dữ liệu - `Kỹ năng để thiết kế cơ sở dữ liệu` -> Tuy nhiên với những người mới học thì `kỹ năng` thiết kế `cơ sở dữ liệu` còn `hạn chế` -> Chúng ta có thể học thêm trên mạng những cái `tips` - `checklist` để thiết kế cơ sở dữ liệu sao cho chuẩn -> Chỉ có thực hành nhiều thì `kỹ năng` thiết kế cơ sở dữ liệu mới có thể đi lên được

- Đối với NoSQL - cụ thể là `MongoDB` nó sẽ có 2 kiểu là `Embedded` và `References` -> 2 kiểu này sẽ linh hoạt sử dụng

- Khi mà biết về 2 kiểu của `MongoDB` là `Embedded` và `References` thì có thể lên `google` search ra bài đọc của 2 thằng này để đọc thêm và tìm hiểu thêm về 2 thằng này -> Để mà có thể áp dụng 2 thằng này một cách linh hoạt và chuẩn chỉnh trong việc thiết kế `cơ sở dữ liệu` -> Phải chịu khó đọc tài liệu thì mới có thể vỡ ra được nhiều vấn đề

- Thì `default` của MongoDB thì nó `prefer` kiểu `Embedded` thì nó sẽ tốt hơn -> Còn trường hợp nào cần xử lý thì hãy nên `References`

- Khi mà `Embedded` khi mà sau này chúng ta `query dữ liệu` thì cúng rất là `gian khổ` nhưng mà nó vẫn dẽ hơn khi mà chúng ta `References` ở khía cạnh nào đó -> Còn việc tách ra để có thể truyền đạt nhiều kiến thức hơn sau này -> Để chúng ta có `một hành trang kinh nghiệm` để sau này áp dụng vào các `dự án thực tế`

- Khi mà làm trong `mock-data` thì chúng ta `Embedded` để cho dễ dàng xử lý -> Còn khi lên `Database` rồi thì chúng ta phải tách ra -> Và viết các cái `đầu API` sau khi chúng ta trả về cho người dùng (FE) thì chúng ta cần `gộp dữ liệu như (Embedded ở mock-data)` sao cho chuẩn như ở `mock-data` -> Để mà `FE` có thể sử dụng được -> Là nó sẽ qua `kha khá` bước xử lý -> Và dĩ nhiên chúng ta sẽ học được nhiều `kiến thức` từ những bước xử lý đó

## Collection board

```ts
interface Board {
  _id: String(require)
}
```

## Collection Column

```ts
interface Column {
  _id: String(require)
}
```

## Collection Card

```ts
interface Card {
  _id: String(require)
}
```

## Collection User

```ts
interface User {
  _id: String(require)
}
```

## Collection Invitation

```ts
interface Invitation {
  _id: String(require)
}
```
