import express from 'express'
import { PORT } from './config'
import { api } from './api'


const startup = () => {
  try {
    const app = express()

    api(app)

    app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
  } catch (err: any) {
    console.log(`[startup] ${err.message}`)
  }
}

startup()