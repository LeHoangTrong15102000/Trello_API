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

export const columnController = {
  createNew
}
