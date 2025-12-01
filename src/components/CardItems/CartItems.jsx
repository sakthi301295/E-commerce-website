import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const CartItems = () => {
  const {
    cartItems,
    all_product,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      <div className="cart-list">
        {all_product
          .filter((p) => cartItems[p.id] > 0)
          .map((product) => (
            <div className="cart-item" key={product.id}>
              <div className="cart-item-img-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="cart-item-img"
                />
              </div>
              <div className="cart-item-details">
                <Link to={`/product/${product.id}`} className="cart-item-name">
                  {product.name}
                </Link>

                <p className="cart-item-category">
                  Category: {product.category}
                </p>

                <p className="cart-item-price">
                  <span className="old">${product.old_price}</span>
                  <span className="new">${product.new_price}</span>
                </p>
                <div className="qty-dropdown">
                  Qty:{" "}
                  <select
                    value={cartItems[product.id]}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value > cartItems[product.id]) {
                        addToCart(product.id);
                      } else {
                        removeFromCart(product.id);
                      }
                    }}
                  >
                    {[...Array(10).keys()].map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <p className="cart-item-total">
                  Total: ${product.new_price * cartItems[product.id]}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => deleteFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Total:</span>
          <span>${getTotalCartAmount()}</span>
        </div>

        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartItems;
