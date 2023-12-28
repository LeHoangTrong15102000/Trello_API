import { boardModel } from '~/models/boardModel'
import ApiError from '~/utils/ApiError'
import { slugify } from '~/utils/formatters'
import { StatusCodes } from 'http-status-codes'

import cloneDeep from 'lodash/cloneDeep'
import { columnModel } from '~/models/columnModel'
import { cardModel } from '~/models/cardModel'

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

    return getNewBoard
  } catch (error) {
    throw error
  }
}

// Lấy chi tiết một cái board cụ thể
const getDetails = async (boardId) => {
  try {
    const board = await boardModel.getDetails(boardId)
    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found!!')
    }

    const responseBoard = cloneDeep(board)

    // Hàm forEach không return nhưng có thể dùng biến đổi dữ liệu của mảng
    responseBoard.columns.forEach((column) => {
      // Cách dùng .equals này là bởi vì chúng ta hiểu ObjectId trong MongoDB có support .equals
      column.cards = responseBoard.cards.filter((card) => card.columnId.equals(column._id))
      // column.cards = responseBoard.cards.filter((card) => card.columnId.toString() === column._id.toString())
    })
    delete responseBoard.cards

    return responseBoard
  } catch (error) {
    throw error
  }
}

const updateDetailBoard = async (boardId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now()
    }
    const updatedBoard = await boardModel.updateBoard(boardId, updateData)
    return updatedBoard
  } catch (error) {
    throw error
  }
}

const moveCardToDifferentColumns = async (reqBody) => {
  try {
    // * B1: Cập nhật lại mảng cardOrderIds của Column ban đầu chứa nó (Hiểu bản chất là xóa _id của cái card ra khỏi mảng)
    await columnModel.updateColumn(reqBody.prevColumnId, {
      cardOrderIds: reqBody.prevCardOrderIds,
      updatedAt: Date.now()
    })

    // * B2: Cập nhật lại mảng cardOrderIs của Column tiếp theo (Hiểu bản chất là thêm _id của cái card vào mảng)
    await columnModel.updateColumn(reqBody.nextColumnId, {
      cardOrderIds: reqBody.nextCardOrderIds,
      updatedAt: Date.now()
    })

    // * B3: Cập nhật lại trường columnId mới của cái Card đã kéo
    await cardModel.updateCard(reqBody.currentCardId, {
      columnId: reqBody.nextColumnId,
      updatedAt: Date.now()
    })

    return { updateResult: 'Successfully! ' }
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew,
  getDetails,
  updateDetailBoard,
  moveCardToDifferentColumns
}
