import React from 'react';
import Link from 'next/link';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveBtn from '../components/pages/RemoveBtn'; 


const getTopics = async()=>{
    try {
      const res = await fetch('http://localhost:3001/api/topics',{
        cache:'no-store',
      });
      if (!res.ok){
        throw new Error ("Failed to fetch Topic")
      }
      return res.json();
    } catch (error) {
      console.log('Error loading topics', error) 
  
    }
  }

export default async function ShowList () {
    const {topics} = await getTopics();
  return (
     <> 
     <div> 
      <h1 className='text-center mt-5' style={{fontSize:'25px'}}>Show Details</h1>

      {topics.map((t) => (
        <div className='container'> 
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                <h6 className=''>Name : {t.name}</h6>
                <h6 className=''>email : {t.email}</h6>
                <h6 className=''>Mobile : {t.phone}</h6>
                <h6 className=''>Message : {t.message}</h6> 
                </div>
                <div className='flex gap-2'>
                    <Link href={`/editTopic/${t._id}`}><EditIcon sx={{color:'#2a94b9'}}/> </Link>  
                    {/* <Link href={"/editTopic/123"}><EditIcon sx={{color:'#2a94b9'}}/> </Link>   */}
                    <RemoveBtn id={t._id}/> 
                </div>
            </div>
        </div>
        ))};

      </div>
     </>
  )
}

// export default page