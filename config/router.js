import express from 'express'
import pokemons from '../controllers/pokemons.js'


const router = express.Router()

router
  .route('/pokemons/:id')
  .get(pokemons.show)

export default router