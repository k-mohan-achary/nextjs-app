import EditTopicForm from '@/app/components/pages/EditTopicForm';
import React from 'react';


const getTopicById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/api/topics/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
 
export default async function EditTopic({params}){
    const {id}= params; 
    const { topic } = await getTopicById(id);
    const { name, email,phone,message } = topic ; 

  return (
    <>
    <div>
       <EditTopicForm id={id} name={name} email={email} phone={phone} message={message} />
    </div>
    </>
  )
}

// export default EditTopic