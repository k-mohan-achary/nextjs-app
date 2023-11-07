import React from 'react';
import Image from 'next/image';  
import { AppBar, Box, Divider, Drawer, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import logo from '../../../../../public/logo.png';
import mail from '../../../../../public/white-icon/email.svg';
import phone from '../../../../../public/white-icon/phone.svg'; 
import location from '../../../../../public/white-icon/location.svg'; 

import facebook from "../../../../../public/icon/facebook.png";
import twitter from "../../../../../public/icon/twitter.png";
import instagram from "../../../../../public/icon/instagram.png";
import dribbble from "../../../../../public/icon/dribbble.png";


const Footer = () => {
  return (
   <>
    <div>
      <div className='footer-section'>
        <div className='footer-sec'> 
        <Box component={'div'}>
          <Box sx={{mb:4}}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <Image src={logo} alt='logo image' />
              </div>
            </div>
          </div>
          </Box>

          <div className='container'>
            <div className='row'>
              <div className='col-md-5'>
                <div className='newsletter'> 
                 <Typography variant='h4' className='footer-heading'>NEWSLETTER SIGNUP</Typography>



                <div>
                 <Typography variant='h4' className='footer-heading'>Social</Typography>
                 <div className='social'>
                  <div className='social-icon'>
                    <Image src={instagram} alt="facebook" />  
                  </div>
                  <div className='social-icon'>
                    <Image src={twitter} alt="facebook" />
                  </div>
                  <div className='social-icon'>
                    <Image src={dribbble} alt="facebook" />
                  </div>
                  <div className='social-icon'>
                    <Image src={facebook} alt="facebook" />
                  </div>
                 </div>
                  
                </div> 

                </div>
              </div>
              
              <div className='col-md-3'>
                <div className=' '> 
                   <Typography className='footer-heading' variant='h4'>Menu</Typography> 
                    <Box className="menu-list "> 
                      <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>What We Do</li>
                        <li>Contact Us</li> 
                      </ul>

                    </Box> 
                </div>
              </div>
                
              <div className='col-md-4'>
              <Box>
              <Typography className='footer-heading' variant='h4'>Say Hello</Typography>
              <div>
              <div className='hello-email '>
                <Image src={mail} alt='phone'/>
                <p className=''>  admin@urbanproperties.ae</p>
              </div>
              <div className='hello-email '>
                <Image src={phone} alt='phone'/>
                <p className=''>  +971 4 591 0000</p>
              </div>
              </div>
              <div>
                <Box>
                 <Typography className='footer-heading' variant='h4'>ADDRESS</Typography>
                 <div className='hello-email '>
                  <Image src={location} alt='location'/> 
                  <p className=''> Office 1102, Al Habtoor Business Tower, Dubai Marina, UAE</p>
                </div>
                </Box>
              </div>
              </Box>
              </div>

            </div>
          </div>

        </Box>
        </div>
      </div>
    </div>
   </>
  )
}

export default Footer