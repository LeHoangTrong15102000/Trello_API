import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardController } from '~/controllers/boardController'
import { boardValidation } from '~/validations/boardValidation'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'GET: API get list boards' })
  })
  .post(boardValidation.createNew, boardController.createNew)

Router.route('/:id')
  .get(boardController.getDetails)
  .put(boardValidation.updateDetailBoard, boardController.updateDetailBoard)

Router.route('/supports/moving_cards').put(
  boardValidation.moveCardToDifferentColumns,
  boardController.moveCardToDifferentColumns
)

// Viết endpoint cập nhật lại board khi thay đổi vị trí các column

export const boardRoute = Router
