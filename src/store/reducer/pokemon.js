const initialState = {
  allPokemon: [],
  selectedPokemon: {},
  nextUrl: '',
  previousUrl: '',
  loading: false,
  error: '',
}

export const pokemonReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case "CHANGE_ALL_POKEMON_DATA":
      return {
        ...state,
        allPokemon: payload
      }
    case "CHANGE_SELECTED_POKEMON_DATA":
      return {
        ...state,
        selectedPokemon: payload
      }
    case "CHANGE_URL_PARAMETERS":
      return {
        ...state,
        nextUrl: payload.next,
        previousUrl: payload.previous
      }
    case "CHANGE_LOADING": 
      return {
        ...state,
        loading: payload
      }
    case "CHANGE_ERROR": 
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}