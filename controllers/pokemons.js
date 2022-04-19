import Pokemon from '../models/pokemon.js'

async function pokemonIndex(_req, res, next) {
  try {
    const pokemon = await Pokemon.find()
    return res.status(200).json(pokemon)
  } catch (err) {
    next(err)
  }
}

async function pokemonShow(req, res) {
  const { pokemonId } = req.params
  try {
    const individualPokemon = await Pokemon.findById(pokemonId)
    if (!individualPokemon){
      res.status(404).json({ message: 'pokemon not found' })
      return
    }
    res.status(200).json(individualPokemon)
    return
  } catch (err) {
    res.status(404).json({ message: 'pokemon not found' })
    return
  }
}

export default {
  index: pokemonIndex,
  show: pokemonShow,
}