import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { pokemonReducer } from './reducer/pokemon'

const store = createStore(
  pokemonReducer,
  applyMiddleware(thunk)
)

export default store