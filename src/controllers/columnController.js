import { StatusCodes } from 'http-status-codes'
import { columnService } from '~/services/columnService'

const createNew = async (req, res, next) => {
  try {
    // Điều hướng dữ liệu sang tầng service
    const createdColumn = await columnService.createNew(req.body)

    // throw new ApiError(StatusCodes.BAD_GATEWAY, 'HoangTrongDev test Error Server!!!')
    res.status(StatusCodes.CREATED).json(createdColumn)
  } catch (error) {
    next(error)
    // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    //   errors: error.message
    // })
  }
}

const updateDetailColumn = async (req, res, next) => {
  try {
    const columnId = req.params.id
    const updatedColumn = await columnService.updateDetailColumn(columnId)

    res.status(StatusCodes.CREATED).json(updatedColumn)
  } catch (error) {
    next(error)
  }
}

const deleteDetailColumn = async (req, res, next) => {
  try {
    const columnId = req.params.id
    const result = await columnService.deleteDetailColumn(columnId)

    res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(error)
  }
}

// const getDetails = async (res, req, next) => {
//   try {
//     //
//   } catch (error) {
//     next(error)
//   }
// }

export const columnController = {
  createNew,
  updateDetailColumn,
  deleteDetailColumn
}
