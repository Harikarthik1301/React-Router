import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {

    const eventData = useLoaderData();
    const events = eventData.events;
    // if(eventData.isError){
    //   return<p>{eventData.message}</p>
    // }

  return (
   <EventsList events={events} />
  );
}

export default EventsPage;

export async function loaderFunction(){
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
      throw {
        message:"Could not Fetch Events"
      }
      // return {
      //   isError : true,
      //   message:"Could not Fetch Events"
      // }
    } else {
      return response;
      // const resData = await response.json();
      // const res = new Response('Any Data',{status : 201});
      // return res;
    }
  }