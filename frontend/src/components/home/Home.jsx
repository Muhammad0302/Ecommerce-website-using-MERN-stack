import { Box, makeStyles } from '@material-ui/core'
import React,{useEffect} from 'react'
import Banner from './Banner'
import MidSection from './MidSection'
import Navbar from './Navbar'
import Slide from './Slide'
// import { products } from '../constants/data';
import {useSelector,useDispatch} from 'react-redux'
import {getProducts as listProducts} from '../../redux/actions/productAction'
const useStyle = makeStyles(theme=>({
    component :{
     padding: 10,
     background: '#F2F2F2',
     [theme.breakpoints.down('sm')]: {
         padding: '10px 0 10px 0'
     }
    },
    rightWrapper: {
      background: '#FFFFFF',
      padding: 5,
      margin: '12px 0 0 10px',
      width: '17%',
      [theme.breakpoints.down('md')]: {
       display: 'none'
    }  
    },
    widthOTheFirstSlide : {
        width: '81%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    }
}));
function Home() {
    const classes = useStyle()
    const productsGet = useSelector(state => state.getProducts)     
    const {products} = productsGet;
    const dispatch = useDispatch()
    useEffect(() => {
   
        dispatch(listProducts())
       
    }, [dispatch])
const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <div>
            <Navbar />
            <Box className={classes.component}>
            <Banner />
            </Box>
            <Box style={{display: 'flex'}}>
               <Box  className={classes.widthOTheFirstSlide}>
                <Slide
                timer={true}
                title='Deals of the Day'
                products={products}
               /></Box> 
               <Box className={classes.rightWrapper}>
                   <img src={adURL} style={{width: 230}} />
                </Box>
            </Box>
            <MidSection />
            <Slide
            timer={false}
            title='Discounts for You'
            products={products}
            />
            <Slide
            timer={false}
            title='Suggested items'
            products={products}
            />
            <Slide 
            timer={false}
            title='Top selection'
            products={products}
            />
            <Slide
            timer={false}
            title='Recommended items'
            products={products}
            />
            <Slide
            timer={false}
            title='Best Sellers'
            products={products}
            />

        </div>
    )
}

export default Home
