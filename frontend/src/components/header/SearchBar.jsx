import React from 'react'
import {makeStyles,InputBase,alpha, List, ListItem} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import {useState} from 'react'
import {getProducts as listProducts} from '../../redux/actions/productAction'
import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const useStyle = makeStyles((theme)=>({
    search: {
        position: 'relative',
        borderRadius: 2,
        backgroundColor: '#fff',
        marginLeft: 10,
        width: '40%',
        display: 'flex',
        color: 'black',
        [theme.breakpoints.down('sm')]: {
          width: '66%'
        } 
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue',
        padding: 5
      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
        fontSize: 'unset',
        fontSize: 14
      },
      inputInput: {
        paddingLeft: 20,
        padding: theme.spacing(1, 1, 1, 0)
      },
      list: {
        position:'absolute',
        color: '#000',
        width: '100%',
        background: '#FFFFFF',
        margin: '30px 0 0 0',
        [theme.breakpoints.down('sm')]: {
          width: '100%'
        }
      }

}))
function SearchBar() {
    const classes = useStyle()
   
   const [searchValue,setSearchValue] = useState()
    const handleChange = (e) =>{
        setSearchValue(e.target.value)
        // console.log(searchValue)
    }

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();
    
    useEffect(() => {
            dispatch(listProducts);
    }, [dispatch]);

    return (
          <div className={classes.search}>
          
            <InputBase
            value={searchValue}
            onChange={(e)=>handleChange(e)} 
             placeholder="Search for products, brand and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
              <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <br/>
            {
              searchValue &&
              <List className={classes.list}>
               
               {
                // products.filter(product=>product.title.longTitle.toLowerCase() === searchValue.toLowerCase())
          products.filter(product=>product.title.shortTitle.toLowerCase().
          includes(searchValue.toLowerCase())).map(product=>(
            <ListItem >
              <Link onClick={()=>setSearchValue('')} style={{textDecoration: 'none',color: 'inherit'}} to={`/product/${product.id}`}>
               {product.title.shortTitle}  
               </Link>        
            </ListItem>
          )) 
           }   
              </List>
            }
          </div>   
    )
}

export default SearchBar
