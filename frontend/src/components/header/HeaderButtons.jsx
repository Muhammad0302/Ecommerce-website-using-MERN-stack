import React, { useState,useContext } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {makeStyles,Button,Box, Typography,Badge} from '@material-ui/core'
import { Link } from 'react-router-dom';
import Login from '../login/Login';
import {LoginContext} from '../context/ContextProvider'
import Profile from './Profile';
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
    const [open, setopen] = useState(false)
    const openDialog = () =>{
     setopen(true)
    }
    const { account, setUserAccount } = useContext(LoginContext);

    return (
        <Box className={classes.wrapper}>
            {
                account ? <Profile account={account} setUserAccount={setUserAccount} />: 
                <Button onClick={()=>openDialog()} className={classes.login} variant="contained">Login</Button>      
            }
            
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
           <Login open={open} setopen={setopen} setUserAccount={setUserAccount} />
        </Box>
    )
}

export default HeaderButtons
