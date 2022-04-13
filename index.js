import express from 'express'
import { connectDb } from './helpers.js'

// invoke express library 
const app = express()
const port = 4000

// allows apps to requests bodies

app.use(express.json())

app.use('/', (req, _res, next) => {
  console.log(`incoming requests: ${req.method} : ${req.url}`)
  next()
})
// async function communicated with the database

async function startServer() {
  try {
    await connectDb() 
    console.log('mongo connected')
    app.listen(port, () => console.log(`listening at ${port}`))
  } catch (err) {
    console.log('something is wrong')
    console.log(err)
  }
}

startServer()




