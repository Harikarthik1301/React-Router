import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {

    const eventData = useLoaderData();

  return (
   <EventsList events={eventData} />
  );
}

export default EventsPage;

export async function loaderFunction(){
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
    } else {
      const resData = await response.json();
      return resData.events;
    }
  }