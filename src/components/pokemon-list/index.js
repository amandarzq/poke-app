import React from 'react';
import { Card } from '../card';
import './style.scss';
import { useSelector } from 'react-redux';
import { Pagination } from '../pagination';

export const PokemonList = () => {
  const { allPokemon } = useSelector((state) => state)
  return (
    <div className='pokemon-list'>
      <div className='cards-container'>
        {
          allPokemon?.map((pokemon, idx) => {
            return <Card pokemon={pokemon} key={idx} />
          })
        }
      </div>
      <Pagination />
    </div>
  )
}
