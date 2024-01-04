import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../components/EventItem.module.css';
import emimage from '../images/em.jpg'

const HomePage = () => {
  return (
    <article className={classes.event}>
      <img src={emimage} alt="events management" />
      <h1>Manage Your Events</h1>
      <p>The Space to create and maintain your events!</p>
      <menu className={classes.actions}>
      <Link to="/events">Events</Link>
      </menu>
    </article>
  )
}

export default HomePage