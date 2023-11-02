// import { Button } from '@mui/material';
import { AppBar, Box, Divider, Drawer, Icon, IconButton, Toolbar, Typography,Button,TextField } from '@mui/material';

import React from 'react'; 
import Image from 'next/image';  

import Layout from './Layout/Layout';

import line from '../../../../public/Line.svg'
import address from '../../../../public/location.png';
import support from '../../../../public/support.png';
import mail from '../../../../public/icon/mail.png';
import phone from '../../../../public/icon/phone.png';


// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

const ContactPage = () => {
  return (
    <>
     <div>
        <div>
            <Layout>
                <div className='background'>
                    <h1>Contact US</h1>
                    <p>Home / Contact</p> 
                </div> 
                <div className='container m-auto'> 
                    <div className='row  contactus-section'>
                    <div className='col-md-5   '> 
                    <div className='contact-us-sec'>
                        <div className='con'>
                            <Image src={line} alt="line" />
                            <h6>Contact Us</h6> 
                        </div>
                        <h2> Connect with Urban Properties Today! </h2>

                    </div> 
                    </div>

                    <div className='col-md-3'> 
                      <div className='con-icon'>
                        <Image src={address} alt="support" />
                        <div className=''>
                            <h5 className='con-icon-heading'>Address</h5>
                            <p className='con-icon-p'> 1102 - Al Habtoor Business Tower, Dubai Marina, Dubai [UAE]</p>  
                        </div> 
                      </div>
                    </div>
                    <div className='col-md-4'> 
                        <div className='con-icon'>
                         <Image src={support} alt="adress" />
                         <div className=''>
                            <h5 className='con-icon-heading'>Contact Details</h5>
                            <div className='email'>
                             <Image src={mail} alt='phone'/>
                             <p className='con-icon-p'>  admin@urbanproperties.ae</p>
                            </div>
                            <div className='email'>
                             <Image src={phone} alt='phone'/>
                             <p className='con-icon-p'>  (04) 591 0000</p>
                            </div> 
                         </div> 
                        </div>
                    </div>

                    </div>
                     
                </div> 
                <br/>
                <br/>
                <div className='container-fluid form-section'>
                    <div className='row'>
                        <div className='col-md-6'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.101445580001!2d78.3753986004811!3d17.44652973520972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e1be700001%3A0xbe4d041bfa66f93c!2sIndispare!5e0!3m2!1sen!2sin!4v1698768520757!5m2!1sen!2sin" width="100%" height="665" style={{border:0}}  loading="lazy"></iframe> 
                        </div>
                        <div className='col-md-6'>
                            <div className='form'>
                                <Box 
                                    component="form"
                                    sx={{  m:2,width:400 ,
                                        "@media (max-width:600px)":{
                                            width:250,
                                            m:1
                                        }
                                    }} 
                                    noValidate
                                    autoComplete="off" 
                                >   
                                    <Box className="contact" sx={{m:2}}>   
                                        <Typography variant='h4'>   Get In Touch </Typography> 
                                        <p>Got Questions? Drop Us a Query!</p>
                                    </Box> 

                                    <Box className="contact-f"> 
                                        <form> 
                                          <TextField fullWidth sx={{mb:1}} id="standard-basic" label="Name" variant="standard" />   
                                          <TextField fullWidth sx={{mb:1}} id="standard-basic" label="Email" variant="standard" />   
                                          <TextField fullWidth sx={{mb:1}} id="standard-basic" label="Phone No." variant="standard" />  
                                          {/* <TextField fullWidth sx={{mb:1}} id="standard-basic" label="Message" variant="standard" />    */}
                                          <TextField fullWidth sx={{mb:1}} multiline rows={5} id="standard-basic" label="Message" variant="standard" /> 
                                        </form> 
                                        <Button>
                                        Get In Touch    
                                        </Button>  
                                        <Button> edit </Button>
                                    </Box> 
                                    
                                </Box>  
                            </div> 
                        </div>
                    </div>
                </div> 
                
            </Layout> 
        </div>

     </div>
    </>
  )
}

export default ContactPage;