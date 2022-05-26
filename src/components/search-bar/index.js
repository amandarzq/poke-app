import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import { fetchOnePokemon } from '../../store/action/pokemon';

export const SearchBar = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const onEnterKey = (e) => {
    if (e.key === 'Enter') {
      dispatch(fetchOnePokemon(input.toLocaleLowerCase()))
    }
  }

  return (
    <div className='search-bar'>
      <input 
        type="text" 
        className='search-input'
        placeholder='search by name'
        value={input}
        onKeyDown={onEnterKey}
        onChange={(e) => setInput(e.target.value)} 
      />
      <div className='search-btn' onClick={() => onEnterKey({ key: 'Enter' })}>
        search
      </div>
    </div>
  )
}
