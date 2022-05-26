import React from 'react';
import './style.scss';
import PokemonLogo from '../../resources/images/pokemon_logo.png'
import { SearchBar } from '../search-bar';

export const Nav = ({ }) => {
  return (
    <nav>
      <img src={PokemonLogo} alt="Pokemon"/>
      <SearchBar />
    </nav>
  )
}
