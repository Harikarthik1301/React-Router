import React from 'react'
import { Link, useParams } from 'react-router-dom'

const EventDetailPage = () => {

    const params = useParams();
  return (
    <>
    <h1>EventDetailPage</h1>
    <h3>Event Id : {params.eventId}</h3>
    <p><Link to='..'>Back</Link></p>
    </>
  )
}

export default EventDetailPage