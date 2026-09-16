import React from 'react'

const Card = ({ imgUrl, itemName }) => {
  return (
    <div className='card'>
      <img src={imgUrl} alt={itemName} />
      <p>{itemName}</p>
    </div>
  )
}

export default Card