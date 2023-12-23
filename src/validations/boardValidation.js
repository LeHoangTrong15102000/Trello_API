/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
      'any.required': 'Title is required!',
      'string.empty': 'Title is not allowed to be empty',
      'string.min': 'Title length must be at least 3 characters long',
      'string.max': 'Title length must be less than or equal to 50 characters long',
      'string.trim': 'Title must not have leading or trailing whitespace'
    }),
    description: Joi.string().required().min(10).max(255).trim().strict().messages({
      'any.required': 'Description is required!',
      'string.empty': 'Description is not allowed to be empty',
      'string.min': 'Description length must be at least 10 characters long',
      'string.max': 'Description length must be less than or equal to 255 characters long',
      'string.trim': 'Description must not have leading or trailing whitespace'
    })
  })

  try {
    console.log('Req Body', req.body)

    // Chỉ định abortEarly false để trường hợp có nhiều lỗi
    await correctCondition.validateAsync(req.body, { abortEarly: false })

    // next()
    res.status(StatusCodes.CREATED).json({ message: 'POST from Validation: API get new boards' })
  } catch (error) {
    console.log('Error', error)

    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message
    })
  }
}

export const boardValidation = {
  createNew
}
