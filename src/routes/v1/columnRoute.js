import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { columnController } from '~/controllers/columnController'
import { columnValidation } from '~/validations/columnValidation'

const Router = express.Router()

Router.route('/').post(columnValidation.createNew, columnController.createNew)

Router.route('/:id')
  .put(columnValidation.updateColumnDetail, columnController.updateDetailColumn)
  .delete(columnValidation.deleteDetailColumn, columnController.deleteDetailColumn)

export const columnRoute = Router
