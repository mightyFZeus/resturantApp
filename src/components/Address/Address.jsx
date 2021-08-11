
import React, { useState, useContext } from "react"
import { PaystackButton } from "react-paystack"
import "./Styles.css"
import {Link} from 'react-router-dom'
import cartContext from '../../Context/CartContext';
import useStyles from './Styles'
import Checkout from "../Checkout/Checkout";

const Address = () => {
  const publicKey = "pk_test_86f1ba3ff3fbb0cf5bfe7ae8b7a21ff7f4f877d4"
  const { sumTotal, clearCart} = useContext(cartContext)
  const amount = sumTotal * 100
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState('')
  const classes = useStyles()


  const componentProps = {
    email,
    amount,
    address,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Buy Now",
    onSuccess: () => {
      setEmail("")
      setName("")
      setPhone("")
      setAddress('')
      
    
    
    },
    onClose: () => alert("Wait! You need this chow, don't go!!!!"),
  }

  

  return (
    <div >
        <div className={classes.toolbar} />
        {sumTotal !== 0?
            <div className="address-page">
                
                <h4>BILLING DETAILS</h4>
                <div className="container">
                
                    <form className='address-form'>
                    <label for='name'>Name:
                        <input
                        type="text"
                        className='input'
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        </label>
                        
                    
                        <label>Email</label>
                        <input
                        type="text"
                        className='input'
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    
                        <label>Phone</label>
                        <input
                        type="text"
                        className='input'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        />
                        
                    
                        <label>Address</label>
                        <input
                        type="text"
                        className='input'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    </form>    
                </div>
                <Checkout />
                <p className="amount">Total Amount To be Paid: <span className='amount-gangan'>{sumTotal }</span> NGN</p>
                <div className='test'>
                <div onClick={() => clearCart()} >
                <PaystackButton className="paystack-button"   {...componentProps} />
            </div>
            <Link to='/cart'>
            <button className='back-to-cart'>Back To Cart</button>
            </Link>
        </div>
        </div>
            : 
         <div>
             <div className={classes.toolbar} />
             <p>You have No Bussiness here</p>
        <Link to='/cart'>
        <button className='back-to-cart'>Back To Cart</button>
        </Link>
         </div>
        }
    </div>
  )
}

export default Address
