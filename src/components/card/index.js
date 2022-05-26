import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedPokemon } from '../../store/action/pokemon';
import './style.scss';
import { colours } from '../../constant';
import PokemonBall from '../../resources/images/white_pokemonball.png'

export const Card = ({ pokemon }) => {
  const dispatch = useDispatch()
  const { selectedPokemon } = useSelector((state) => state)
  const { name, types, sprites } = pokemon || {}
  const TYPES = types?.map(item => item.type.name)

  const onSelectPokemon = () => {
    dispatch(changeSelectedPokemon(pokemon))
  }

  return (
    <div className={`small-card ${selectedPokemon.name === pokemon.name && 'selected'}`}
      style={{ backgroundColor: TYPES ? colours[TYPES[0]] : '#A8A77A' }}
      onClick={onSelectPokemon}>
      <div className='pokemon-name'>{name}</div>
      <div className='row'>
        <div className='left'>
          <div className='tag-container'>
            {
              TYPES?.map((item, idx) => {
                return (
                  <div className='type-tag' key={idx}>
                    {item}
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='pokemon-image'>
          <img src={sprites?.other?.['official-artwork'].front_default} alt={name} />
        </div>
      </div>
      <div className='card-bg-image'>
        <img src={PokemonBall} alt="" />
      </div>
    </div>
  )
}