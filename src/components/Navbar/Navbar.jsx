import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../Asset/logo.png";
import cart_icon from "../Asset/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const { searchQuery, setSearchQuery } = useContext(ShopContext);
  const { searchResults } = useContext(ShopContext);
  const navigate = useNavigate();

  const { all_product, getTotalCartItems } = useContext(ShopContext);

  const products = all_product || [];
  const filtered = searchQuery.trim()
    ? products.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const openSearchPage = () => {
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/mens">Mens</Link>
        </li>
        <li>
          <Link to="/womens">Womens</Link>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
      </ul>
      <div className="nav-search">
        <input
          type="search"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button onClick={openSearchPage}>Search</button>
        {searchQuery && (
          <div className="search-dropdown">
            {filtered.length === 0 ? (
              <p>No products found</p>
            ) : (
              filtered.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="search-item"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <img src={item.image} alt="" />
                  <span>{item.name}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
