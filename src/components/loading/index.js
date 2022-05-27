import React from 'react';
import './style.scss';
import PokemonLogo from '../../resources/images/pokemon_logo.png';

export const Loading = () => {
  return (
    <div className='loading'>
      <img src={PokemonLogo} alt="Pokemon"/>
    </div>
  )
}
