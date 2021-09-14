import React from 'react'
import {AppBar,Toolbar,makeStyles, Typography, Box, withStyles, IconButton, Drawer,List, ListItem} from '@material-ui/core'
import { useState } from 'react';
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
const useStyle = makeStyles(theme=>({
    header:{
      backgroundColor: '#2874f0',
      height: 55
    },
    logo:{
       width: 75
    },
    subURL: {
     width: 10,
     marginLeft:4,
     height: 12,
     paddingTop:2
    },
    container:{
     display: 'flex',
     fontSize: 13
    },
    component:{
        marginLeft: '12%',
        lineHeight: 0,
        [theme.breakpoints.down('sm')]: {
            marginLeft: '2%',
        }
    },
    Link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    menueButton :{
     display: 'none',
     [theme.breakpoints.down('sm')]: {
         display: 'block'
     }
    },
    list: {
        width: 200
    },
    customButton: {
        margin: '0 5% 0 auto',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }  
    }
}));

const ToolBar = withStyles({
    root:{
        minHeight: 55
    }
})(Toolbar);

function Header() {
 const classes = useStyle()
 const [openBtn,setOpenBtn] = useState(false)
 const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
 const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const handleOpen = () =>{
      setOpenBtn(true)
  }
  const handleClose = () =>{
    setOpenBtn(false)
}
   const list = () =>(
   <Box className={classes.list} onClick={handleClose}>
             <List>
                 <ListItem>
                 <HeaderButtons /> 
                 </ListItem>
             </List>
     </Box>
    )
   
    return (
        <div>
            <AppBar className={classes.header}>
                <ToolBar>
                <IconButton style={{color:'inherit'}}
                className={classes.menueButton}
                >
                     <MenuIcon onClick={handleOpen} />
                </IconButton>
                <Drawer open={openBtn} onClose={handleClose}>
                  {list()}
                </Drawer>
                  <Box className={classes.component}> 
                        <img src={logoURL} alt="logo"  className={classes.logo} />
                        <Box className={classes.container}>
                      <Link className={classes.Link} to='/'><Typography style={{fontStyle: 'italic',fontSize: '13px'}}>Export <Box component="span" style={{color:'rgb(221, 221, 25)'}}>plus</Box></Typography></Link>
                        <img src={subURL} alt="sublogo" className={classes.subURL} />
                        </Box>
                  </Box>
                  <SearchBar />    
                <span className={classes.customButton}><HeaderButtons /></span>        
               </ToolBar>
            </AppBar>
        </div>
    )
}

export default Header
