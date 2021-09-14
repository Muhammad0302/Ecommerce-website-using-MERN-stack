import React, { useState,useContext } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {makeStyles,Button,Box, Typography,Badge} from '@material-ui/core'
import { Link } from 'react-router-dom';
import Login from '../login/Login';
import {LoginContext} from '../context/ContextProvider'
import Profile from './Profile';
import { useSelector,useDispatch } from 'react-redux';
const useStyle = makeStyles(theme=>({
     login:{
     backgroundColor: '#ffffff',
     color: '#7874f0',
     fontWeight: '600',
     boxShadow: 'none',
     textTransform: 'none',
     borderRadius: 2,
     [theme.breakpoints.down('sm')]: {
         backgroundColor: '#2874f0',
         color: '#FFFFFF'
     }
    },
    wrapper: {
     marginLeft: 'auto',
    
     display: 'flex',
     '&> *':{
         marginRight: 50,
         alignItems: 'center',
         [theme.breakpoints.down('sm')]: {
             alignItems: 'center',
             display: 'flex',
             flexDirection: 'column'
         }
     },
     [theme.breakpoints.down('sm')]: {
         display: 'block',
     }
    },
    Link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));
function HeaderButtons() {
    const classes = useStyle()

    const {cartItems} = useSelector(state => state.cartAction) 

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
           <Badge badgeContent={cartItems.length} color="secondary">   
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
