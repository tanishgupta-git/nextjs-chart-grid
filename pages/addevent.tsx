import { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link'

const AddEvent : NextPage = () => {
    
    const [value,setValue] = useState("");
    const handleSubmit = () => {
       console.log(value);
       setValue("");
    }

   return (
       <div>
        <Link href="/">
            <a>Back To Stat</a>
        </Link>
           <input  type="text" placeholder="Enter a int Value" value={value} onChange={ (e) => setValue(e.target.value)} />
           <input type="button" value="Add" onClick={handleSubmit} />
       </div>
   )
}

export default AddEvent;