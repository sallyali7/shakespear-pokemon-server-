import Pokemon from '../models/pokemon.js'

async function pokemonShow(req, res) {
  try {
    const individualPokemon = await Pokemon.findById(req.params.id)
    if (!individualPokemon){
      res.status(404).json({ message: 'pokemon not found' })
    }
    return res.status(200).json(individualPokemon)
  } catch (err) {
    return res.status(404).json({ message: 'pokemon not found' })
  }
}

export default {
  show: pokemonShow,
}