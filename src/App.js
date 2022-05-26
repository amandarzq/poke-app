import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { fetchAllPokemon } from './store/action/pokemon';
import { 
  DetailCard,
  Nav,
  PokemonList,
 } from './components';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllPokemon())
  }, [dispatch])
  
  return (
    <div className="pokemon-app">
      <Nav />
      <div className="pokemon-app_content">
        <PokemonList />
        <DetailCard />
      </div>
    </div>
  );
}

export default App;
