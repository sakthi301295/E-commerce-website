import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/popular/Popular";
import { Offer } from "../components/Offers/Offers";
import NewCollections from "../components/NewCollections/NewCollections";
import { NewsLetter } from "../components/NewsLetter/NewsLetter";
import "./CSS/Shop.css";

export const Shop = () => {
  return (
    <div>
      <div className="shop-filters">
        <select>
          <option value="">Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="new">Newest Arrivals</option>
        </select>

        <select>
          <option value="">Category</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>

        <select>
          <option value="">Brand</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="puma">Puma</option>
        </select>
      </div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};
export default Shop;
