import React from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPokemon } from '../../store/action/pokemon';

export const Pagination = () => {
  const dispatch = useDispatch()
  const { nextUrl, previousUrl } = useSelector((state) => state)
  
  const onFetchData = (url) => {
    dispatch(fetchAllPokemon(url))
  }

  return (
    <div className='pagination-container'>
      <div className={`paging-btn previous ${!previousUrl && 'disable'}`}
        onClick={() => previousUrl ? onFetchData(previousUrl) : {}}>
        <p>previous</p>
      </div>
      <div className={`paging-btn ${!nextUrl && 'disable'}`}
        onClick={() => nextUrl ? onFetchData(nextUrl) : {}}>
        <p>next</p>
      </div>
    </div>
  )
}
