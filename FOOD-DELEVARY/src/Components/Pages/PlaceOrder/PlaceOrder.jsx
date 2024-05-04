import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../../Context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="number" placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="card-total">
          <h2>Cart Total</h2>
          <div>
          <div className="card-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
