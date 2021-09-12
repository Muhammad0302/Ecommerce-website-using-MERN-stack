import { Box, makeStyles, Typography,Table,TableBody,TableCell,TableRow } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail } from "../../redux/actions/productAction";
import {LocalOffer} from '@material-ui/icons';
import clsx from "clsx";
import ActionItem from "./ActionItem";
const useStyle = makeStyles({
  component: {
    marginTop: 55,
    background: "#F2F2F2",
  },
  container: {
    margin: "0 80px",
    background: "#fff",
    display: "flex",
  },
  rightContainer: {
    marginTop: 50,
    "& > *": {
      marginTop: 10,
    },
  },
  smallText: {
    fontSize: 14,
    '& > *':{
      fontSize: 14,
      marginTop: 10
    }
  },
  greyTextColor: {
    color: "#878787",
  },
  image: {
    width: 77,
    marginLeft: 20,
  },
  price: {
    fontSize: 28,
  },
  badge: {
    fontSize: 14,
    marginRight: 10,
    color: '#00CC00'
  },
  removeBorder: {
    borderBottom: 'none',
    
  }
});
function DetailProductView({ match }) {
  const classes = useStyle();
  const date = new Date(new Date().getTime()+( 5 * 24 * 60 * 60 * 1000))
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    

const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  const { product } = useSelector((state) => state.getProductDetail);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(getProductDetail(match.params.id));
  }, [Dispatch]);
  return (
    <Box className={classes.component}>
      {product && Object.keys(product).length && (
        <Box className={classes.container}>
          <Box style={{ minWidth: "40%" }}>

           <ActionItem product={product} />

          </Box>
          <Box className={classes.rightContainer}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              className={clsx(classes.smallText, classes.greyTextColor)}
            >
              8 Ratings & 1 Review
              <span>
                <img src={fassured} className={classes.image} />
              </span>
            </Typography>
            <Typography>
              <span className={classes.price}>₹{product.price.cost}</span>{" "}
              &nbsp; &nbsp; &nbsp;
              <span className={classes.greyTextColor}>
                {" "}
                <strike>₹{product.price.mrp}</strike>
              </span>{" "}
              &nbsp; &nbsp; &nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </span>
            </Typography>
            <Typography style={{marginTop: 20,fontWeight: 600}}>Available offers</Typography>
            <Box className={classes.smallText}>
              <Typography>
                 <LocalOffer className={classes.badge} />
                Bank Offer10% off on ICICI Bank Credit Cards, up to ₹1250. On
                orders of ₹5000 and aboveT&C
              </Typography>

              <Typography>
                <LocalOffer className={classes.badge} />
                Bank Offer10% off on ICICI Bank Credit Card EMI, up to ₹1250. On
                orders of ₹5000 and aboveT&C
              </Typography>

              <Typography>
                 <LocalOffer className={classes.badge} />
                Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit
                CardT&C
              </Typography>

              <Typography>
                <LocalOffer className={classes.badge} />
                Special PriceGet extra 10% off (price inclusive of discount)T&C
              </Typography>
            </Box>
            <Table>
              <TableBody >
                <TableRow className={classes.smallText}>
                  <TableCell className={clsx(classes.removeBorder)} style={{verticalAlign: 'baseLine'}}>Delivery</TableCell>
                  <TableCell className={clsx(classes.removeBorder,classes.greyTextColor)} style={{fontWeight: 600,color: 'black'}}>{date.toDateString()}</TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.removeBorder} style={{verticalAlign: 'baseLine'}}>Warranty</TableCell>
                  <TableCell className={clsx(classes.removeBorder,classes.greyTextColor)}>No Waranty</TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.removeBorder} style={{verticalAlign: 'baseLine',color: 'rgba(0, 0, 0, 0.87)'}}> &nbsp;  Seller</TableCell>
                  <TableCell className={clsx(classes.removeBorder,classes.greyTextColor)}>
                    <span style={{color: '#2874f0'}}>superComNet</span>
                    <Typography>GST invoice Avaiable</Typography>
                    <Typography>14 Days Retrun Policy</Typography>
                    <Typography>View more sellers from ₹300</Typography>
                  </TableCell>
                </TableRow>
                <TableRow >
                  <TableCell colSpan={2} className={classes.removeBorder}>
                        <img src={sellerURL} style={{width: '100%'}} />
                  </TableCell>     
                  </TableRow>
                  <TableRow>
                  {
                    product.description && 
                    <>
                    <TableCell className={clsx(classes.removeBorder,classes.smallText)} style={{verticalAlign: 'baseLine'}} >Description</TableCell>  
                    <TableCell className={clsx(classes.removeBorder,classes.greyTextColor)}>{product.description}</TableCell>
                    </>
                  }   
                  </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default DetailProductView;
