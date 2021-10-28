import type { NextPage } from 'next';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import DataChart from '../components/DataChart';
import DataGrid from '../components/DataGrid';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Link href="/addevent">
            <a>Add</a>
        </Link>
        <Tabs>
          <TabList>
            <Tab>HighChart</Tab>
            <Tab>AG Grid</Tab>
          </TabList>

          <TabPanel>
            <DataChart />
          </TabPanel>
          <TabPanel>
             <DataGrid />
          </TabPanel>
        </Tabs>
    </div>
  )
}

export default Home