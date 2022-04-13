import express from 'express'
import { connectDb } from './helpers.js'
import router from './config/router.js'
import { port } from './config/enviroment.js'


const app = express()


app.use(express.json())
app.use('/', router)



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




