import axios from 'axios';

export default class PokemonService {
  static async getPokemonData(url){
    try {
      const { data } = await axios.get(url)
      return data
    } catch (err) {
      throw err
    }
  }
}