import { ObjectId } from 'mongodb'
import Joi from 'joi'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

// Define Collection (name & schema)
const CARD_COLLECTION_NAME = 'cards'
const CARD_COLLECTION_SCHEMA = Joi.object({
  boardId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  columnId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),

  title: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().optional(),
  cover: Joi.string().optional(),

  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false)
})

const INVALID_UPDATE_FIELDS = ['_id', 'createdAt', 'boardId']

const validateBeforeCreate = async (data) => {
  return await CARD_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
}

// Data truyền vào cần phải validateAsync
const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data)
    const addNewCard = {
      ...validData,
      boardId: new ObjectId(validData.boardId),
      columnId: new ObjectId(validData.columnId)
    }

    return await GET_DB().collection(CARD_COLLECTION_NAME).insertOne(addNewCard)
  } catch (error) {
    throw new Error(error)
  }
}

const findOneById = async (cardId) => {
  try {
    return await GET_DB()
      .collection(CARD_COLLECTION_NAME)
      .findOne({
        _id: new ObjectId(cardId)
      })
  } catch (error) {
    throw new Error(error)
  }
}

const updateCard = async (cardId, updateData) => {
  Object.keys(updateData).forEach((fieldName) => {
    if (INVALID_UPDATE_FIELDS.includes(fieldName)) {
      delete updateData[fieldName]
    }
  })

  // Đối với những dữ liệu liên quan đến ObjectId thì chúng ta nên xử lý tại đây(Tùy sau này nếu cần tách function riêng)
  // Đối với Model của Card những dự liệu liên quan đến id có thể thay đổi chỉ có `columnId`

  if (updateData.columnId) {
    updateData.columnId = new ObjectId(updateData.columnId)
  }

  try {
    const result = await GET_DB()
      .collection(CARD_COLLECTION_NAME)
      .findOneAndUpdate(
        { _id: new ObjectId(cardId) },
        {
          $set: updateData
        },
        {
          returnDocument: 'after'
        }
      )

    return result
  } catch (error) {
    throw new Error(error)
  }
}

const deleteManyByColumnId = async (columnId) => {
  try {
    const result = await GET_DB()
      .collection(CARD_COLLECTION_NAME)
      .deleteMany({
        columnId: new ObjectId(columnId)
      })
    // console.log('🚀 ~ file: cardModel.js:90 ~ deleteManyByColumnId ~ result:', result)

    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const cardModel = {
  CARD_COLLECTION_NAME,
  CARD_COLLECTION_SCHEMA,
  createNew,
  findOneById,
  updateCard,
  deleteManyByColumnId
}
