"use client"

import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

 
import { useRouter } from "next/navigation";


export default function RemoveBtn ({id}) {
  const router = useRouter();

  const removeTopic = async() =>{
    const confirmed = confirm('Are you sure?');
    if (confirmed){
      const res = await fetch(`http://localhost:3001/api/topics?id=${id}`, {
        method:"DELETE", 
      }); 
      if (res.ok) {
        router.refresh();
      }
    }
  }

  return (
    <>
    <div>
    <div>
        <button onClick={removeTopic} className='text-red-500'><DeleteIcon sx={{color:'red'}} /> </button>
    </div>

    
    </div>    
    </>
  )
}

