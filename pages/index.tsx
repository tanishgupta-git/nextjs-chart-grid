import type { NextPage } from 'next';
import { useState,useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import AddEvent from '../components/AddEvent';
import Stats from '../components/Stats';
import eventI from '../types/event';
import Spinner from '../components/Spinner';

// graphql query for getting the events
const GET_EVENTS = gql`
  query GetEvents {
    events {
      id
      value
      datetime
    }
  }
`;


const Home: NextPage = () => {

  const [events,setEvents] = useState<eventI[]>([]);
  const [addEvent,setAddEvent] = useState(false);
  const { loading, error, data } = useQuery(GET_EVENTS);

  // useeffect to set list of events coms from the usequery hook
  useEffect(() => {
    if(data) {
      setEvents(data.events)
    }
 },[data])
 
 // loader and error component react to usequery hook
  if (loading) return <Spinner />;
  if(error) return <div>Error From next chart grid</div>;


  return (
    <div>
        {
          addEvent ?
           <AddEvent events={events} setAddEvent={setAddEvent} setEvents={setEvents} />
           :
           <Stats events={events} setAddEvent={setAddEvent} />
        }
    </div>
  )
}

export default Home;