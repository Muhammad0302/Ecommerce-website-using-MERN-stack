import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import Banner from './Banner'
import MidSection from './MidSection'
import Navbar from './Navbar'
import Slide from './Slide'
const useStyle = makeStyles({
    component :{
     padding: 10,
     background: '#F2F2F2'
    },
    rightWrapper: {
      background: '#FFFFFF',
      padding: 5,
      margin: '12px 0 0 10px',
      width: '17%'  
    }
})
function Home() {
    const classes = useStyle()
     

const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <div>
            <Navbar />
            <Box className={classes.component}>
            <Banner />
            </Box>
            <Box style={{display: 'flex'}}>
               <Box style={{width: '81%'}}>
                <Slide
                timer={true}
                title='Deals of the Day'
               /></Box> 
               <Box className={classes.rightWrapper}>
                   <img src={adURL} style={{width: 230}} />
                </Box>
            </Box>
            <MidSection />
            <Slide
            timer={false}
            title='Discounts for You'
            />
            <Slide
            timer={false}
            title='Suggested items'
            />
            <Slide 
            timer={false}
            title='Top selection'
            />
            <Slide
            timer={false}
            title='Recommended items'
            />
            <Slide
            timer={false}
            title='Best Sellers'
            />

        </div>
    )
}

export default Home
