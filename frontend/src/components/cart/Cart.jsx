import { Box, makeStyles, Typography, Button} from '@material-ui/core';
import CartItem from './CartItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeFromCart,cartAction} from '../../redux/actions/cartAction'
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';


const useStyle = makeStyles({
    component: {
         marginTop: 55,
        padding: '30px 135px',
        display: 'flex',
    },
    leftComponent: {
        // width: '67%',
        paddingRight: 15,
      
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    },
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        borderTop: '1px solid #f0f0f0'
    },
    placeOrder: {
        display: 'flex',
        marginLeft: 'auto',
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 51
    }
});

const Cart = ({ match, history }) => {
    const classes = useStyle();

    const cartDetails = useSelector(state => state.cartAction);
    const { cartItems } = cartDetails;

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(cartItems && match.params.id !== cartItems.id)   
            dispatch(cartAction(match.params.id));
        console.log(cartItems);
    }, [dispatch, cartItems, match]);

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }


    return (
        <>
        { cartItems.length ? 
            <Box container className={classes.component}>
                <Box className={classes.leftComponent}>
                    <Box className={classes.header}>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
                    </Box>
                        {   cartItems.map(item => (
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }
                    <Box className={classes.bottom}>
                        <Button variant="contained" className={classes.placeOrder}>Place Order</Button>
                    </Box>
                </Box>
                <Box >
                    <TotalView cartItems={cartItems} />
                </Box>
            </Box> : <EmptyCart />
        }
        </>

    )
}

export default Cart;