/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import Joi from 'joi'

// Defined Collection (Name vs Schema)

const BOARD_COLLECTION_NAME = 'boards'
const BOARD_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  slug: Joi.string().required().min(3).trim().strict(),
  description: Joi.string().required().min(10).max(255).trim().strict(),

  // Mặc đinh cái columnOrdeIds ban đầu sẽ là một cái mảng rỗng
  columnOrderIds: Joi.array().items(Joi.string()).default([])
})
