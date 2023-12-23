/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import exitHook from 'async-exit-hook'
import { CLOSE_DB, CONNECT_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'

// Sẽ gọi tới START_SERVER khi mà kết nối tới DB thành công
const START_SERVER = () => {
  const app = express()

  app.use('/v1', APIs_V1)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(
      `3. Hello ${env.AUTHOR}, Back-end Server is running successfully at Host: ${env.APP_HOST} and Port: ${env.APP_PORT}`
    )
  })

  // Thực hiện các tác clean-up trước khi dừng server lại
  exitHook(() => {
    console.log('4. Server is shutting down...')
    CLOSE_DB()
    console.log('4. Disconnected from MongoDB Cloud Atlas')
  })
}

;(async () => {
  try {
    console.log('1. Connecting to MongoDB Cloud Atlas...')
    await CONNECT_DB()
    console.log('2. Connected to MongoDB Cloud Atlas!')

    // Khởi động SERVER back-end sau khi connect database thành công
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
