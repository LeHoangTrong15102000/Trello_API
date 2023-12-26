import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { cardController } from '~/controllers/cardController'
import { cardValidation } from '~/validations/cardValidation'

const Router = express.Router()

Router.route('/').post(cardValidation.createNew, cardController.createNew)

// Router.route('/:id').get(cardController.getDetails).put()

export const cardRoute = Router
