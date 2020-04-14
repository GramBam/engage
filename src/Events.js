import React, { Fragment } from 'react'
import EventCard from './EventCard'


function Events() {
  return (
    <Fragment>
      <p style={{color: "#FFF", fontSize:42}}>Past Events</p>
      <EventCard />
    </Fragment>
  )
}

export default Events;