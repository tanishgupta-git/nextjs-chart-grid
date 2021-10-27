import type { NextPage } from 'next';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from '../styles/Home.module.css';
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Link href="/addevent">
            <a>Add</a>
        </Link>
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
    </div>
  )
}

export default Home