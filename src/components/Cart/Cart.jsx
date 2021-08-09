import React,{useContext} from 'react'
import cartContext from '../../Context/CartContext';
import {Grid, Card, CardContent} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import './Styles.css'
import {Link} from 'react-router-dom'
import useStyles from './Styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import face from '../../assets/images/face.png'

const Cart = () => {
    const {cart, deleteFromCart, clearCart} = useContext(cartContext)
    const classes =  useStyles()
   

    return (
        
        <>
        <div className={classes.toolbar} />
        {cart.length !==0 ?
        
            <div>
                <h1>Your Orders</h1>
                <hr />
                {cart.length > 0? <p className='cart-length'>You have {cart.length} items left in your Cart</p>:'null'}
                <Grid container spacing={3}>
               
               {cart.map((item)=>(
                   
                   <Grid item xs={6} sm={3} md={3}>
                       <Card>
                           <CardContent>
                           
                   <div >
                     
                      <img className='cart-image' src={item.content.children[0].currentSrc} />
                      <div className='cart-name-price-div'>
                       <p>{item.content.childNodes[1].innerHTML}</p>
                       <p>{item.content.nextSibling.innerText}</p>
                       <DeleteIcon onClick={()=> deleteFromCart(item.id)    } />
   
                      </div>
                     
                   </div>
               
                           </CardContent>
                       </Card>
                       
                   </Grid>
                   ))}
                    
               </Grid>
            </div>
            
                :
                <div>
                    <p className='empty-cart-text'>Your cart is empty, start shopping now</p>
                    <img src={face}/>
                <Link className='cart-link' to='/menu'>
                
                <button className='empty-cart'>Go to shop Now<span><ArrowBackIcon /></span></button>
                </Link>
                </div>
                
                }
                {cart.length !== 0  && <button className='clear-cart-btn' onClick={() =>clearCart()}>Clear cart</button>  }
            
            
           
        </>
    )
}

export default Cart
