import React from 'react'
import {ImageURL} from '../constants/data'
import { Box, makeStyles,Grid } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
const useStyle = makeStyles(theme=>({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    helper: {
      [theme.breakpoints.down('md')]: {
          objecFit: 'cover',
          height: 120
      }    
    }
}));
function MidSection() {
    const classes = useStyle()
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
         <>   
        <Grid container lg={12} md={12} sm={12} xs={12} className={classes.wrapper}>
            {
                ImageURL.map(image=>(
                    <Grid lg={4} md={4} sm={12} xs={12} item>
                    <img src={image} style={{width: '100%'}} />
                    </Grid>
                ))
            }
        </Grid>
         <img className={classes.helper} src={coronaURL} style={{width: '100%',marginTop: 20}} />
        </>
    )
}

export default MidSection
