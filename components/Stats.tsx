import type { NextPage } from 'next';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from '../styles/Home.module.css';
import EventChart from '../components/EventChart';
import EventGrid from '../components/EventGrid';
import { useState } from 'react';
import eventI from '../types/event';

interface props {
    events : eventI[],
    setAddEvent : React.Dispatch<React.SetStateAction<boolean>>
}


const Stats: NextPage<props> = ({events,setAddEvent}) => {
  
  const [tabIndex, setTabIndex] = useState(0);
  
  return (
    <div className={styles.container}>

          <div className='linkContainer'>
                <span className='linkHead'>Next Chart Grid</span>
                <span className="linkPage" onClick={() => setAddEvent(true)}>Add Event</span> 
          </div>

            <Tabs className={styles.statsContainer} selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                    <TabList className={styles.statsTabList}>
                      <Tab className={tabIndex === 0 ? 'tabActive' : 'tabInactive'}>HighChart</Tab>
                      <Tab className={tabIndex === 1 ? 'tabActive' : 'tabInactive'}>AG Grid</Tab>
                    </TabList>

                    <TabPanel className={styles.stats} >
                      <EventChart events={events}/>
                    </TabPanel>
                    <TabPanel className={styles.stats}>
                      <EventGrid events={events} />
                    </TabPanel>
            </Tabs>


    </div>
  )
}

export default Stats;