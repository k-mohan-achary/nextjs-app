"use client"; 
import React, { useState } from 'react';
import { useRouter } from "next/navigation";


export default function AddTopic() {

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [message,setMessage] = useState("");

  const router = useRouter();


//   const handleSubmit = async ( e ) => {
//     e.preventDefault();

//     if (!title || !description || !name || !email || !phone || !message) {
//       alert("Title and description are required.");
//       return;
//     }
    
//     try {
//       const res = await fetch('http://localhost:3001/api/topics',{ 
//         method:"post",
//         headers:{
//           "Content-type":"application/json"
//         },
//         body: JSON.stringify({title,description,name,email,phone,message})
//       } );
//       if (res.ok){
//         router.push('/');

//       } else {
//         throw new Error("Failed to create a topic")
// 4      }
//     } catch (error) {
//       console.log(error);
//     }
//   }
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!title || !description || !name || !email || !phone || !message) {
    alert("Title and description are required.");
    return;
  }

  try {
    const res = await fetch('http://localhost:3001/api/topics', {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, description, name, email, phone, message }),
    });

    if (res.ok) {
      router.push('/');
    } else {
      const data = await res.json(); // You can parse the error response if available
      console.log(data);
      throw new Error("Failed to create a topic");
    }
  } catch (error) {
    console.error(error);
  }
}


  return (
   <>
   <div>
    <div>
     <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      <input 
      onChange={(e) =>setTitle(e.target.value)}
      value={title}
      className='border border-slate px-8 py-2' 
      type="text" placeholder='Topic Title'  
      />
      <input 
      onChange={(e) =>setDescription(e.target.value)}
      value={description}
      className='border border-slate px-8 py-2' type="text" 
      placeholder='Topic Desc'
      />  

      <input 
      onChange={(e) =>setName(e.target.value)}
      value={name}
      className='border border-slate px-8 py-2' type="text" 
      placeholder='Name'
      />   
      <input 
      onChange={(e) =>setEmail(e.target.value)}
      value={email}
      className='border border-slate px-8 py-2' type="text" 
      placeholder='Email'
      />  
      <input 
      onChange={(e) =>setPhone(e.target.value)}
      value={phone}
      className='border border-slate px-8 py-2' type="text" 
      placeholder='Phone'
      />  
      <input 
      onChange={(e) =>setMessage(e.target.value)}
      value={message}
      className='border border-slate px-8 py-2' type="text" 
      placeholder='Message'
      />  

      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Topic
      </button>
     </form>
    </div>
   </div>
   
   </>
  )
}
 























// "use client"; 
// import React, { useState } from 'react';
// import { useRouter } from "next/navigation";

// import { Box,Button,TextField } from '@mui/material';


// // const Contact = () => {
//     export default function Contact() {

//         const [name,setName] = useState("");
//         const [email,setEmail] = useState("");
//         const [phone,setPhone] = useState("");
//         const [message,setMessage] = useState("");
      
//         const router = useRouter();
      
      
//         const handleSubmit = async ( e ) => {
//           e.preventDefault();
      
//           if (!name || !email || !phone || !message) {
//             alert("Title and description are required."); 
//             return;
//           }
          
//           try {
//             const res = await fetch('http://localhost:3001/api/topics',{ 
//               method:"post",
//               headers:{
//                 "Content-type":"application/json"
//               },
//               body: JSON.stringify({name,email,phone,message})
//             } );
//             if (res.ok){
//               router.push('/show');
      
//             } else {
//               throw new Error("Failed to create a topic")
//       4      }
//           } catch (error) {
//             console.log(error);
//           }
//         }
      




//   return (
//     <div>
        

//         <Box className="contact-f"> 
//         <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
//           <input 
//           onChange={(e) =>setName(e.target.value)}
//           value={name}
//           className='border border-slate px-8 py-2' 
//           type="text" placeholder='Topic Title' 
//           />
//           <input 
//           onChange={(e) =>setEmail(e.target.value)}
//           value={email} 
//           className='border border-slate px-8 py-2' type="text" 
//           placeholder='Topic Desc'
//           />  
//           <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
//             Add Topic
//           </button>
//         </form>
//             {/* <form onSubmit={handleSubmit}> 
//                 <TextField
//                  onChange={(e) =>setName(e.target.value)}
//                  value={name}
//                  fullWidth sx={{mb:1}} id="standard-basic" label="Name" variant="standard" />   
//                 <TextField 
//                  onChange={(e) =>setEmail(e.target.value)}
//                  value={email}
//                  fullWidth sx={{mb:1}} id="standard-basic" label="Email" variant="standard" />   
//                 <TextField 
//                  onChange={(e) =>setPhone(e.target.value)}
//                  value={phone}
//                  fullWidth sx={{mb:1}} id="standard-basic" label="Phone No." variant="standard" />   
//                 <TextField 
//                  onChange={(e) =>setMessage(e.target.value)}
//                  value={message}
//                  fullWidth sx={{mb:1}} multiline rows={5} id="standard-basic" label="Message" variant="standard" /> 

//                 <button type="submit">
//                   Get In Touch    
//                 </button>  <br/>
//             </form>  */}
            
//             {/* <Button> edit </Button>  */}
//         </Box> 
//     </div>
//   )
// }
 









 