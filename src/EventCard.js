import React from 'react'
import './EventCard.css'

function EventCard() {
  return (
    <div className="card">
      <img className="card__img" src="https://i.imgur.com/Rb8Kh2Y.jpg" alt="" />
      <div className="card__info-wrap">
        <p className="card__title">Rave Against Time</p>
        <div className="card__info">
          <p>Saturday, November 4 - 10:30pm</p>
          <p>Maezo Indian Bar</p>
        </div>
      </div>
    </div>
  )
}

export default EventCard;
