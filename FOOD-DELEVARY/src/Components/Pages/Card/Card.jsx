import React, { useContext } from "react";
import "./Card.css";
import { StoreContext } from "../../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="card-items-title card-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="card-bottom">
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
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="card-promo">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="card-promo-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
