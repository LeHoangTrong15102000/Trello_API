/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

const MONGODB_URI =
  'mongodb+srv://langtupro0456:0773094710trong@cluster0-hoangtrongdev.t4eqczc.mongodb.net/?retryWrites=true&w=majority'

const DATABASE_NAME = 'trello-hoangtrongdev-mern-stack'

import { MongoClient, ServerApiVersion } from 'mongodb'

// Khởi tạo một đối tượng trelloDatabaseInstance ban đầu là null (vì chúng ta chưa connnect)
let trelloDatabaseInstance = null

// Khởi tạo một đối tượng Client Instance để connect tới MongoDB
const mongoClientInstance = new MongoClient(MONGODB_URI, {
  // Lưu ý cái serverApi có từ phiên bản MongoDB 5.0.0, có thể không cần dùng nó, còn nếu dùng nó là chúng ta sẽ chỉ định một cái Stable Api Version của MongoDB

  // Stable Api Version như là một kiểu của MongoDB khi có lỗi thì nó sẽ báo lỗi ngay
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

// Kết nối tới Database (function cấu hình dạng global) thường hay có sở thích viết hoa hết
export const CONNECT_DB = async () => {
  // gọi kết nối tới mongoDB Atlas với URI đã được khai báo trong clientInstance
  await mongoClientInstance.connect()

  // Kết nối thành công thì lấy ra Database theo tên và gán ngược nó lại vào biến trelloDatabaseInstance
  trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

// Đóng kết nối tới Database khi cần
export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}

// Function bình thường, hàm GET_DB sử dụng lại ở nhiều nơi
// Có nhiệm vụ export ra cái Trello Database sau khi đã connect thành công tới MongoDB để có thể sử dụng ở nhiều nơi khác nhau
// Lưu ý phải đảm bảo chỉ luôn gọi cái getDB này sau khi đã kết nối thành công tới MongoDB
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect Database first!')
  return trelloDatabaseInstance
}
