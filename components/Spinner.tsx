import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Spinner.module.css';

const Spinner : NextPage = () => {
   return ( 
   <div className={styles.spinnerContainer}>
      <div className={styles.spinner} >

      </div>
    </div>
   )
}
export default Spinner;