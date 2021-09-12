import React from 'react'
import {Box, makeStyles,Button} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import clsx from 'clsx'
import { useSelector,useDispatch } from 'react-redux';
import { cartAction } from '../../redux/actions/cartAction';
import {useHistory} from 'react-router-dom'
const useStyle = makeStyles({
    leftContainer: {
      padding: '40px 0 0 80px'
    },
    image: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '85%',
        marginBottom: 15
    },
   Button: {
       height: 50,
       width: '46%',
       borderRadius: 2
   },
   addToCart: {
       background: '#ff9f00',
       color: '#fff',
       marginRight: 11 
   },
   buyNow: {
       background: '#fb641b',
       color: '#fff'
   },
   icon: {
       marginRight: 3
   }
})

function ActionItem({product}) {
    const dispatch =useDispatch()
    const History = useHistory()
    const addToCart = () =>{
      dispatch(cartAction(product.id))
      History.push('/cart')
    }
  const classes = useStyle()
    return (
         <Box className={classes.leftContainer}>
             <img src={product.detailUrl} className={classes.image} />
             <Button onClick={()=>addToCart()} variant="contained" className={clsx(classes.Button,classes.addToCart)}><ShoppingCartIcon className={classes.icon} />Add to Cart</Button>
             <Button variant="contained" className={clsx(classes.Button,classes.buyNow)}> <FlashOnIcon className={classes.icon} />Buy Now</Button>
         </Box>
    )
}

export default ActionItem
