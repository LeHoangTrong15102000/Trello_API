import { columnModel } from '~/models/columnModel'
import { StatusCodes } from 'http-status-codes'

const createNew = async (reqBody) => {
  try {
    const newColumn = {
      ...reqBody
    }
    // Khi mà tạo mới thì nó không trả về object Card cho chúng ta  mà nó sẽ trả về cái kiểu là {acknowledge: true , ...id}
    const createdColumn = await columnModel.createNew(newColumn)
    const getNewColumn = await columnModel.findOneById(createdColumn.insertedId)

    return getNewColumn
  } catch (error) {
    throw error
  }
}

export const columnService = {
  createNew
}
