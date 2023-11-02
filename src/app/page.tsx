import React from 'react'; 
// import '../app/globals.css';
import '../app/components/stylesheet/style.css'; 
import ContactPage from './components/pages/ContactPage'; 



const page = () => {
  return (
    <>
    <div>
      <h1 className='text-center' style={{fontSize:'25px'}}>Next js </h1>  
      <ContactPage/>
    </div>
    </>
  )
}

export default page;