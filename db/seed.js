import Pokemon from '../models/pokemon.js'
import { connectDb, disconnectDb, truncateDb } from '../helpers.js'
import pokemonData from './data/pokemon.js'

async function seed() {
  try {
    await connectDb()
    console.log('Connected to Database')

    await truncateDb()
    console.log('Database Dropped')

    const pokemon = await Pokemon.create(pokemonData)
    console.log(`🤖 ${pokemon.length} Pokemon added to the database`)

    console.log('Goodbye')
  } catch (err) {
    console.log('Something went wrong')
    console.log(err)
  }
  disconnectDb()
}

seed()