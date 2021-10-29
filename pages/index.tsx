import type { NextPage } from 'next';
import { useState,useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import AddEvent from '../components/AddEvent';
import Stats from '../components/Stats';
import eventI from '../types/event';

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

  useEffect(() => {
    if(data) {
      setEvents(data.events)
    }
 },[data])

  if (loading) return <div>Loading</div>;
  if(error) return <div>error</div>;


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