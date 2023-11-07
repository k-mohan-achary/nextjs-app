"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
// import {TextField} from '@mui/material';


export default function EditTopicForm({ id, name, email, phone, message }) {
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const [newMessage, setNewMessage] = useState(message);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3001/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newEmail, newPhone, newMessage }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/show");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-9'>
          </div>
          <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
            <form onSubmit={handleSubmit} className='flex flex-row gap-3'>
              <input
                onChange={(e) => setNewName(e.target.value)}
                value={newName} 
                className='border border-slate px-8 py-2'
                type="text"
                placeholder='Name'
              />
              <input
                onChange={(e) => setNewEmail(e.target.value)}
                value={newEmail} 
                className='border border-slate px-8 py-2'
                type="text"
                placeholder='Email'
              />
              <input
                onChange={(e) => setNewPhone(e.target.value)}
                value={newPhone} 
                className='border border-slate px-8 py-2'
                type="text"
                placeholder='Phone'
              />
              <input
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage} 
                className='border border-slate px-8 py-2'
                type="text"
                placeholder='Message'
              />

              <button className="bg-blue-600 font-bold text-white py-3 px-6 w-fit">
                Update Topic
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
