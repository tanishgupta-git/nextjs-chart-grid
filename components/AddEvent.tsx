import { useState } from 'react';
import type { NextPage } from 'next';
import styles from '..//styles/AddEvent.module.css';
import moment from 'moment';
import React from 'react'
import { gql, useMutation } from '@apollo/client';
import eventI from '../types/event';

// mutation for adding an event
const ADD_EVENT = gql`
  mutation AddEvent($event: Event!) {
    addEvent(event: $event)
     }
`;


interface props {
    events : eventI[],
    setAddEvent : React.Dispatch<React.SetStateAction<boolean>>,
    setEvents : React.Dispatch<React.SetStateAction<eventI[]>>
}

const AddEvent : NextPage<props> = ({events,setAddEvent,setEvents}) => {
    
    const [value,setValue] = useState("");
    const [addEventMutation, { data, loading, error }] = useMutation(ADD_EVENT);

    const handleSubmit = () => {
        if (isNaN(Number(value)) === true) {
          alert("Enter a valid value");
          return;
       }

       // updating the local state with nerw event 
       setEvents([...events,{
           value: Number(value),
           id : Math.floor(Math.random() * 10000),
           datetime : moment().format('MMM DD YYYY, h:mm:ss a')
       }])


    // function for adding mutation
    //    addEventMutation({variables:{
    //     value: Number(value),
    //     id : Math.floor(Math.random() * 10000),
    //     datetime : moment().format('MMM DD YYYY, h:mm:ss a')
    //   }})

       setAddEvent(false);
    }


   return (
       <div>

          <div className='linkContainer'>
                    <span className='linkHead'>Next Chart Grid</span>
                    <span className='linkPage' onClick={() => setAddEvent(false)}>&#8592; Back To Stat</span>        
         </div>

         <div className={styles.formContainer} >
               <div className={styles.inputContainer}>
                    <input type="text" placeholder="Enter a int Value" className={styles.inputvalue} value={value} onChange={ (e) => setValue(e.target.value)} required={true}/>
                    <input type="button" value="Add" className={styles.inputbutton} onClick={handleSubmit} />
                </div>
         </div>

       </div>
   )
}

export default AddEvent;