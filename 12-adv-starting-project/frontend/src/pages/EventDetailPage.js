import React from 'react'
import { json, redirect, useParams, useRouteLoaderData } from 'react-router-dom'
import EventItem  from "../components/EventItem"

const EventDetailPage = () => {

    const params = useParams();
     const data = useRouteLoaderData("edit-details");
  return (
   <EventItem event = {data.event} />
  )
}

export default EventDetailPage

export async function loader ({request, params}){
  const id = params.eventId;
   const response = await fetch('http://localhost:8080/events/' + id);

   if (! response.ok ){
    throw json({message :'Could not fetch details for the selected Event!'},
    {
      status:500
    })
   } else {
    return response;
   }
}

export async function action ({ params }){
  const eventId = params.eventId;
  const response = await fetch ("http://localhost:8080/events/" + eventId);

  if (! response.ok ){
    throw json({message :'Could not delete Event!'},
    {
      status:500
    })
   }
 return redirect('/events');
}