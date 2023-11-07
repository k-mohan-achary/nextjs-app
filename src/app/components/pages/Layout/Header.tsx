import React from 'react';
import Link from 'next/link';


import Image from 'next/image';  
import { AppBar, Box, Divider, Drawer, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import logo from '../../../../../public/logo.png';  


const Header = () => {
  return (
    <>
      <div>
       

        <Box> 
          <AppBar position='static' component={'nav'} sx={{bgcolor:'black'}}>
            <Toolbar>
              <Typography color={"goldenrod"} component='div' sx={{flexGrow: 1}}>   
                <Image src={logo} alt="logo image" style={{ height: '40px', width: '150px' }} />    
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                      <ul className='navigation-menu'>
                        <li>Home</li>
                        <li>About</li>
                        <li>What We Do</li>
                        <li>Contact</li>  
                        <li><Link href={'/show'}> Show</Link>  </li>   
                        

                        
                      </ul>
                    </Box>
            </Toolbar> 

          </AppBar>
        </Box>
      </div>
    </>
  )
}

export default Header;
