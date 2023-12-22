/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import { CONNECT_DB, GET_DB } from '~/config/mongodb'

// Sẽ gọi tới START_SERVER khi mà kết nối tới DB thành công
const START_SERVER = () => {
  const app = express()

  const hostname = 'localhost'
  const port = 8017

  app.get('/', async (req, res) => {
    // Test Absolute import mapOrder
    console.log(await GET_DB().listCollections().toArray())
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(
      `3. Hello Hoang Trong Dev, Back-end Server is running successfully at Host: ${hostname} and Port: ${port}`
    )
  })
}

;(async () => {
  try {
    console.log('1. Connecting to MongoDB Cloud Atlas...')
    await CONNECT_DB()
    console.log('2. Connected to MongoDB Cloud Atlas!')

    START_SERVER()
  } catch (error) {
    console.error(error)
    // là method mặc định của nodejs để exit cái chương trình ra thôi
    process.exit(0)
  }
})()

// Chỉ khi kết nối với Database thành công thì mới START_SERVER
// console.log('1. Connecting to MongoDB Cloud Atlas...')
// CONNECT_DB()
//   .then(() => console.log('2. Connected to MongoDB Cloud Atlas!'))
//   .then(() => START_SERVER())
//   .catch((error) => {
//     console.error(error)
//     // là method mặc định của nodejs để exit cái chương trình ra thôi
//     process.exit(0)
//   })
