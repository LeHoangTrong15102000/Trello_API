/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { boardModel } from '~/models/boardModel'
import { slugify } from '~/utils/formatters'

const createNew = async (reqBody) => {
  try {
    // Xử lý logic
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    // Gọi đến tầng Model để xử lý lưu bản ghi newBoard vào trong Database
    const createdBoard = await boardModel.createNew(newBoard)

    // Lấy bản ghi board sau khi gọi (tuỳ mục đích dự án mà có cần bước này hay không)
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)

    // Làm thêm các logic khác với các Collection khác tùy đặc thù dự án..vv
    // Bắn email, notification về cho admin khi có một cái board mới được tạo,..vv

    // Giả sử cái board này đã được lưu vào DB rồi và return board về cho người dùng
    return getNewBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}
