import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button,makeStyles } from '@material-ui/core'
import {bannerData} from '../constants/data'
const useStyle = makeStyles ({
 
})
function Banner() {
    const classes = useStyle()
    return (
        <div>
        <Carousel>
            {
                bannerData.map(image=> 
                <img src={image} /> 
                )
            }
        </Carousel>
            
        </div>
    )
}

export default Banner
