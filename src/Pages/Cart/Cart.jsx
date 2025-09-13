

import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, food_list, removeFromCart , getTotalCartAmount} = useContext(StoreContext);

  const navigate=useNavigate();

  const deliveryFee = 45; 
  const subtotal = getTotalCartAmount();
  const total = subtotal + deliveryFee;

  return (
    <div className='cart'>
      <div className="cart-items">
        {/* Title row */}
        <div className='cart-items-title'>
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {/* Item rows */}
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className='cart-items-item' key={item._id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p 
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => removeFromCart(item._id)}
                >
                  x
                </p>
              </div>
            )
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>

            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b> ${total}</b>
            </div>
            <hr/>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
        <div>
          <p>If you have a promo code,Enter it here</p>
          <div className='cart-promocode-input'>
          <input type='text' placeholder='promocode'/>
          <button>Submit</button>

          </div>
        </div>

        </div>
      </div>


    </div>
  )
}

export default Cart
