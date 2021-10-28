import type { NextPage } from 'next';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import EventChart from '../components/EventChart';
import EventGrid from '../components/EventGrid';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  interface event {
    date : string,
    value : string,
    id : string
}
  const [events,setEvents] = useState<event[]>([]);
  const [tabIndex, setTabIndex] = useState(0);


  return (
    <div className={styles.container}>
      <div className='linkContainer'>
        <Link href="/addevent">
            <a className="linkPage">Add Event</a>
        </Link>
      </div>
        <Tabs className={styles.statsContainer} selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList className={styles.statsTabList}>
            <Tab className={tabIndex === 0 ? 'tabActive' : 'tabInactive'}>HighChart</Tab>
            <Tab className={tabIndex === 1 ? 'tabActive' : 'tabInactive'}>AG Grid</Tab>
          </TabList>

          <TabPanel>
            <EventChart events={events}/>
          </TabPanel>
          <TabPanel>
             <EventGrid events={events} />
          </TabPanel>
        </Tabs>
    </div>
  )
}

export default Home;