import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {makeStyles,Button,Box, Typography,Badge} from '@material-ui/core'
import { Link } from 'react-router-dom';
const useStyle = makeStyles({
    login:{
     backgroundColor: '#ffffff',
     color: '#7874f0',
     fontWeight: '600',
     boxShadow: 'none',
     textTransform: 'none',
     borderRadius: 2,
    },
    wrapper: {
     marginLeft: 'auto',
    
     display: 'flex',
     '&> *':{
         marginRight: 50,
         alignItems: 'center'
     }
    },
    Link: {
        textDecoration: 'none',
        color: 'inherit'
    }
})
function HeaderButtons() {
    const classes = useStyle()
    return (
        <Box className={classes.wrapper}>
            <Button className={classes.login} variant="contained">Login</Button>
           <Typography style={{marginTop: 7}}>More</Typography>
           <Box style={{display:'flex'}}>
           <Link className={classes.Link} to='/cart'>   
           <Badge badgeContent={2} color="secondary">   
           <ShoppingCartIcon />
           </Badge>
           </Link> 
           <Link className={classes.Link} to='/cart'> 
               <Typography style={{marginLeft: 10}}>Cart</Typography>
           </Link>   
           </Box>
        </Box>
    )
}

export default HeaderButtons
