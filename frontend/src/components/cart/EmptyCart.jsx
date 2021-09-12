
import { makeStyles, Typography, Box,Button } from '@material-ui/core';
import {Link} from 'react-router-dom'
const useStyle = makeStyles({
    component: {
        width: '80%%',
        height: '65vh',
        background: '#fff',
        margin: '80px 140px'
    },
    image: {
        width: '15%'
    },
    container: {
        textAlign: 'center',
        paddingTop: 70
    },
    button: {
        marginTop: 12,
        width: 150,
        backgroundColor: '#2874f0'
    },
    linker: {
        textDecoration: 'none',
        color: 'inherit'
    }
})


const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const classes = useStyle();

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img src={imgurl} className={classes.image} />
                <Typography>Your cart is empty!</Typography>
                <span>Add items to it now.</span> <br />
          <Link className={classes.linker} to='/'><Button className={classes.button} variant="contained">Shop Now</Button></Link>
            </Box>
        </Box>
    )
}

export default EmptyCart;