import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { fetchAllPokemon } from './store/action/pokemon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  DetailCard,
  Nav,
  PokemonList,
 } from './components';

function App() {
  const dispatch = useDispatch()
  const { error } = useSelector((state) => state)

  useEffect(() => {
    dispatch(fetchAllPokemon())
  }, [dispatch])

  useEffect(() => {
    if (error) toast.error(error)
  }, [error])
  
  return (
    <div className="pokemon-app">
      <Nav />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="pokemon-app_content">
        <PokemonList />
        <DetailCard />
      </div>
    </div>
  );
}

export default App;
