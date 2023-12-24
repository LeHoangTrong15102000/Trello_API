/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { slugify } from '~/utils/formatters'

const createNew = async (reqBody) => {
  try {
    // Xử lý logic
    const newBoard = {
      ...reqBody,
      slug: slugify(req.body)
    }

    // Gọi đến tầng Model để xử lý lưu bản ghi newBoard vào trong Database

    // Làm thêm các logic khác với các Collection khác tùy đặc thù dự án..vv
    // Bắn email, notification về cho admin khi có một cái board mới được tạo,..vv

    // Giả sử cái board này đã được lưu vào DB rồi và return board về cho người dùng
    return newBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}
