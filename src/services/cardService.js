import { cardModel } from '~/models/cardModel'
import { slugify } from '~/utils/formatters'
import { StatusCodes } from 'http-status-codes'

const createNew = async (reqBody) => {
  try {
    const newCard = {
      ...reqBody
    }
    const createdCard = await cardModel.createNew(newCard)
    const getNewCard = await cardModel.findOneById(createdCard.insertedId)

    // ...

    return getNewCard
  } catch (error) {
    throw error
  }
}

export const cardService = {
  createNew
}
