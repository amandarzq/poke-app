import React from 'react';
import { Card } from '../card';
import './style.scss';
import { useSelector } from 'react-redux';
import { Pagination } from '../pagination';
import { Loading } from '../loading';

export const PokemonList = () => {
  const { allPokemon, loading } = useSelector((state) => state)

  if (loading) {
    return (
      <div className='loading-container'>
        <Loading /> 
      </div>
    )
  }

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
