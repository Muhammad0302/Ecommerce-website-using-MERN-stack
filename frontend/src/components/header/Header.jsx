import React from 'react'
import {AppBar,Toolbar,makeStyles, Typography, Box, withStyles} from '@material-ui/core'
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';
const useStyle = makeStyles({
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
        lineHeight: 0
    }
})

const ToolBar = withStyles({
    root:{
        minHeight: 55
    }
})(Toolbar);

function Header() {
 const classes = useStyle()
 const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
 const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <div>
            <AppBar className={classes.header}>
                <ToolBar>
                  <Box className={classes.component}> 
                        <img src={logoURL} alt="logo"  className={classes.logo} />
                        <Box className={classes.container}>
                        <Typography style={{fontStyle: 'italic',fontSize: '13px'}}>Export <Box component="span" style={{color:'rgb(221, 221, 25)'}}>plus</Box></Typography>
                        <img src={subURL} alt="sublogo" className={classes.subURL} />
                        </Box>
                  </Box>
                  <SearchBar />    
                  <HeaderButtons />        
               </ToolBar>
            </AppBar>
        </div>
    )
}

export default Header
