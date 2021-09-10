import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactDOM from "react-dom";
import Countdown from "react-countdown"
import { makeStyles,Box,Typography, Button, Divider } from '@material-ui/core';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
     
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  }

  const useStyle = makeStyles({
    component: {
     marginTop: 12,
     background: '#ffffff'
    },
    image: {
     height: 150    
    },
    deal:{
     padding: '15px 20px',
     display: 'flex'
    },
    dealText:{
      fontSize: 22,
      fontWeight: 600,
      lineHeight: '32px',
      marginRight: 25
    },
    timer: {
      color: '#7f7f7f',
      marginLeft: 10,
      display: 'flex',
      alignItems: 'center',
      fontWeight: 600
    },
    button: {
     marginLeft: 'auto',
     background: '#2874f0',
     borderRadius: 2,
     fontSize: 13
    },
    text: {
      marginTop: 5,
      fontSize: 14
    },
    wrapper: {
      padding: '35px 15px'
    }
  })

function Slide({timer,title,products}) {
  const classes = useStyle()
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';  
  const renderer = ({hours,minutes,seconds}) =>{
     return <span className={classes.timer}>{hours} : {minutes} : {seconds} Left</span>
  }
  return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
              <Typography className={classes.dealText}>{title}</Typography>
              {
                  timer && 
                  <>  
                    <img src={timerURL} style={{width: '24px'}} />
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    <Button variant="contained" color="primary" className={classes.button}>View all</Button>
                  </>
              }
            </Box>
            <Divider />
            <Carousel 
            responsive={responsive}
            infinite={true}
            draggable={false}
            swipeable={false}
            centerMode={true}
            autoPlay={true}
            autoPlaySpeed={10000}
            keyBoardControl={true}
            showDots={false}
            removeArrowOnDeviceType={["tablet","mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
                  {
                      products.map(product=>(
                        <Box textAlign="center" className={classes.wrapper}>
                          <img className={classes.image} src={product.url} />
                         <Typography className={classes.text} style={{fontWeight: 600,color: '#212121'}}>{product.title.shortTitle}</Typography>
                         <Typography className={classes.text} style={{color: 'green'}}>{product.discount}</Typography>
                         <Typography className={classes.text} style={{color: '#212121',opacity:'0.6'}}>{product.tagline}</Typography>
                    
                          </Box>
                      ))
                  }
            </Carousel>
        </Box>
    )
}

export default Slide
