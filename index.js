import express from 'express'
import { connectDb } from './helpers.js'
import Pokemon from './models/pokemon.js'

// invoke express library 
const app = express()
const port = 4001

// allows apps to requests bodies

app.use(express.json())

app.use('/', (req, _res, next) => {
  console.log(`incoming requests: ${req.method} : ${req.url}`)
  next()
})

// Pokemon Controller

app.get('/pokemon', async (_req, res) => {
  const pokemons = await Pokemon.find()
  return res.status(200).json(pokemons)
})

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




