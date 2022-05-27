import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import { colours } from '../../constant';

export const DetailCard = () => {
  const { selectedPokemon, loading, error } = useSelector((state) => state)
  const { height, name, sprites, weight, types, stats } = selectedPokemon
  const TYPES = types?.map(item => item?.type?.name)

  const KeyValueDetal = ({ label, value }) => {
    return (
      <div>
        <div className='value'>{value}</div>
        <div className='key'>{label}</div>
      </div>
    )
  }

  if (loading) {
    return null
  }

  return (
    <div className='pokemon-detail'>
      <div className='detail-card'>
        <div className='pokemon-3d'>
          <img src={sprites?.other?.home?.front_default} alt={name ? name : "_"} />
        </div>
        <div className='pokemon-info'>
          <div className='pokemon-info_name'>{name ? name : "_"}</div>
          <div className='row'>
            {
              TYPES?.map((item, idx) => {
                return (
                  <div className='dot' key={idx}
                    style={{ backgroundColor: item ? colours[item] : '#A8A77A'  }}>
                  </div>
                )
              })
            }
          </div>
          <div className='row type-labels'>
            { TYPES?.join(' / ') }
          </div>
          <div className='pokemon-info_details'>
            <div className='row'>
              <KeyValueDetal label="WEIGHT" value={`${weight} KG`} />
              <KeyValueDetal label="HEIGHT" value={`${height} M`} />
            </div>
          </div>
          <div className='pokemon-info_stats'>
            {
              stats?.map((item, idx) => {
                return (
                  <div key={idx} className="stats-item">
                    <div className='label'>{item?.stat?.name} / </div>
                    <div className='value'>{item?.base_stat}</div>
                  </div>
                )
              })
            }
            <div className='row'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
