import React from 'react';
import Image from 'next/image';  
import { AppBar, Box, Divider, Drawer, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import logo from '../../../../../public/logo.png';
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

                </div>
              </div>
              
              <div className='col-md-3'>
                <div className=' '> 
                   <Typography className='footer-heading' variant='h4'>Menu</Typography> 
                  <Box className="menu-list"> 
                    <ul>
                      <li>hvjvj</li>
                      
                    </ul>

                  </Box> 
                </div>
              </div>
                
              <div className='col-md-4'>
              <Box>
              <Typography className='footer-heading' variant='h4'>Say Hello</Typography>
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