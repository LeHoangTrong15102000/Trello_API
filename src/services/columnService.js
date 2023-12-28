import { columnModel } from '~/models/columnModel'
import { StatusCodes } from 'http-status-codes'
import { boardModel } from '~/models/boardModel'

const createNew = async (reqBody) => {
  try {
    const newColumn = {
      ...reqBody
    }
    // Khi mà tạo mới thì nó không trả về object Card cho chúng ta  mà nó sẽ trả về cái kiểu là {acknowledge: true , ...id}
    const createdColumn = await columnModel.createNew(newColumn)
    const getNewColumn = await columnModel.findOneById(createdColumn.insertedId)

    if (getNewColumn) {
      // xử lý cấu trúc data ở dây trước khi trả về dữ liệu cho FE
      getNewColumn.card = []

      // Cập nhật lại mảng columnOrderIds trong collection boards của chúng ta
      await boardModel.pushColumnOrderIds(getNewColumn)
    }

    return getNewColumn
  } catch (error) {
    throw error
  }
}

const updateDetailColumn = async (columnId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now()
    }

    const updatedColumn = await columnModel.updateColumn(columnId, updateData)
    return updatedColumn
  } catch (error) {
    throw error
  }
}

export const columnService = {
  createNew,
  updateDetailColumn
}
