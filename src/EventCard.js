import React from 'react'
import './EventCard.css'

function EventCard() {
  return (
    <div className="card">
      <img className="card__img" src="https://i.imgur.com/Rb8Kh2Y.jpg" alt="" />
      <div style={{width: "20vw"}}>
        <p className="card__title">Rave Against Time</p>
        <ul className="card__info">
          <li>Saturday, November 4 - 10:00pm</li>
          <li>Maezo Indian Bar</li>
        </ul>
      </div>
    </div>
  )
}

export default EventCard;
