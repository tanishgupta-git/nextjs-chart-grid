import { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link'
import styles from '../styles/AddEvent.module.css';


const AddEvent : NextPage = () => {
    
    const [value,setValue] = useState("");
    const handleSubmit = () => {
       if (value === "" || Number(value) === NaN) {
          alert("Enter a valid value");
          return;
       }
       console.log({
           value: value,
           id : Math.floor(Math.random() * 10000),
           time : new Date().getTime()
       })
    }


   return (
       <div>

          <div className='linkContainer'>
                <Link href="/">
                    <a className='linkPage'>Back To Stat</a>
                </Link>
         </div>
         <div className={styles.formContainer} >
               <div className={styles.inputContainer}>
                    <input type="text" placeholder="Enter a int Value" className={styles.inputvalue} value={value} onChange={ (e) => setValue(e.target.value)} />
                    <input type="button" value="Add" className={styles.inputbutton} onClick={handleSubmit} />
                </div>
         </div>

       </div>
   )
}

export default AddEvent;