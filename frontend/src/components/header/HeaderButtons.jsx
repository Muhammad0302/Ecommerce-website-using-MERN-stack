import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {makeStyles,Button,Box, Typography,Badge} from '@material-ui/core'
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
    }
})
function HeaderButtons() {
    const classes = useStyle()
    return (
        <Box className={classes.wrapper}>
            <Button className={classes.login} variant="contained">Login</Button>
           <Typography style={{marginTop: 7}}>More</Typography>
           <Box style={{display:'flex'}}>
               
           <Badge badgeContent={2} color="secondary">
           <ShoppingCartIcon />
           </Badge>
               <Typography style={{marginLeft: 10}}>Cart</Typography>
           </Box>
        </Box>
    )
}

export default HeaderButtons
