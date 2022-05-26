import React from 'react';
import './style.scss';
import PokemonLogo from '../../resources/images/pokemon_logo.png'

export const Nav = ({ }) => {
  return (
    <nav>
      <img src={PokemonLogo} alt="Pokemon"/>
    </nav>
  )
}
