import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import { fetchOnePokemon } from '../../store/action/pokemon';

export const SearchBar = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [onSearching, setSearching] = useState(false)

  const onEnterKey = async (e) => {
    setSearching(true)
    try {
      if (e.key === 'Enter' && input) {
        await dispatch(fetchOnePokemon(input.toLocaleLowerCase()))
      }
    } catch (err) {
      setInput('')
    } finally {
      setSearching(false)
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
        {onSearching ? "searching..." : "search" }
      </div>
    </div>
  )
}
