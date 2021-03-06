import express from 'express'
import pokemon from '../controllers/pokemons.js'


const router = express.Router()

router.route('/pokemon')
  .get(pokemon.index)

router
  .route('/pokemon/:pokemonId')
  .get(pokemon.show)

export default router