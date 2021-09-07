import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button,makeStyles, Slide } from '@material-ui/core'
import {bannerData} from '../constants/data'
const useStyle = makeStyles ({
 image: {
     width: '100%',
     backgroundPosition: 'center',
     backgroundSize: 'cover',
     height: 280
 },
 carousel: {
     marginTop: 20
 }
})
function Banner() {
    const classes = useStyle()
    return (
        <div>
        <Carousel
        autoPlay={true}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps ={{
            style: {
                background: '#ffffff',
                color: '#494949',
                borderRadius: 3,
                margin: 0,
                height: 60,
                
            }
        }}
        className={classes.carousel}
        >
            {
                bannerData.map(image=> 
                <img src={image} className={classes.image} /> 
                )
            }
        </Carousel>
            
        </div>
    )
}

export default Banner
