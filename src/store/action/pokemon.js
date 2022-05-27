import PokemonService from '../../services/pokemon'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export const changeAllPokemonData = (payload) => {
  return {
    type: "CHANGE_ALL_POKEMON_DATA",
    payload
  }
}

export const changeSelectedPokemon = (payload) => {
  return {
    type: "CHANGE_SELECTED_POKEMON_DATA",
    payload
  }
}

export const changePaginationUrls = (payload) => {
  return {
    type: "CHANGE_URL_PARAMETERS",
    payload
  }
}

const changeLoading = (payload) => {
  return {
    type: "CHANGE_LOADING",
    payload
  }
}

const changeError = (payload) => {
  return {
    type: "CHANGE_ERROR",
    payload
  }
}

export const fetchAllPokemon = (url = BASE_URL) => {
  return async (dispatch) => {
    dispatch(changeLoading(true))
    dispatch(changeError(""))
    try {
      const pokemon = await PokemonService.getPokemonData(url)
      const { next, previous, results } = pokemon || {}
      const completeData = await Promise.all(results?.map(async (item) => {
        const data = await PokemonService.getPokemonData(item.url)
        return data
      }))
      dispatch(changePaginationUrls({ next, previous }))
      dispatch(changeAllPokemonData(completeData))
      dispatch(changeSelectedPokemon(completeData[0]))
    } catch (err) {
      dispatch(changeError(err))
    } finally {
      dispatch(changeLoading(false))
    }
  }
}

export const fetchOnePokemon = (pokemon, url = BASE_URL) => {
  return async (dispatch) => {
    dispatch(changeError(""))
    try {
      const data = await PokemonService.getPokemonData(`${url}/${pokemon}`)
      dispatch(changeSelectedPokemon(data))
    } catch (err) {
      dispatch(changeError(err))
    }
  }
}
