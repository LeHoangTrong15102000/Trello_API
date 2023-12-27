// Điều hướng dữ liệu trong ứng dụng của chúng ta

import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'

const createNew = async (req, res, next) => {
  try {
    // console.log('Req Body', req.body)

    // Điều hướng dữ liệu sang tầng service
    const createdBoard = await boardService.createNew(req.body)

    // throw new ApiError(StatusCodes.BAD_GATEWAY, 'HoangTrongDev test Error Server!!!')
    res.status(StatusCodes.CREATED).json(createdBoard)
  } catch (error) {
    next(error)
    // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    //   errors: error.message
    // })
  }
}

// Lây ra một cái board cụ thể
const getDetails = async (req, res, next) => {
  try {
    const boardId = req.params.id // lấy ra cái `Id` từ Route
    // Sau này ở khoá MERN stack Advance sẽ có thêm userId nữa để chỉ lấy board  thuộc về user đó thôi
    const board = await boardService.getDetails(boardId)
    return res.status(StatusCodes.OK).json(board)
  } catch (error) {
    next(error)
  }
}

const updateDetailBoard = async (req, res, next) => {
  try {
    const boardId = req.params.id
    const updatedBoard = await boardService.updateDetailBoard(boardId, req.body)
    return res.status(StatusCodes.CREATED).json(updatedBoard)
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew,
  getDetails,
  updateDetailBoard
}
