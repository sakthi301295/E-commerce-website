import React from "react";
import "./CartItems.css";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import remove_icon from "../Asset/cart_cross_icon.png";

export const CartItems = () => {
  const { getTotalCartAmount,all_product, cartItems, RemoveFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if(cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="cartitems-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => RemoveFromCart(e.id)}
                  alt=""
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="carditems-down">
        <div className="carditems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitem-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>Checkout</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promocode, please enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="Promo Code" />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};
