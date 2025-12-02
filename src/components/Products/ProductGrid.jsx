import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./ProductGrid.css";

const ProductGrid = ({ filters }) => {
  const { all_product } = useContext(ShopContext);

  const [sortType, setSortType] = useState(""); // ⭐ SORT STATE

  if (!all_product || !Array.isArray(all_product)) {
    return <h2>Loading...</h2>;
  }

  // 1️⃣ FILTER LOGIC
  let filteredProducts = all_product.filter((product) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    ) return false;

    if (
      filters.brands.length > 0 &&
      !filters.brands.includes(product.brand)
    ) return false;

    if (product.new_price > filters.price) return false;

    if (product.rating < filters.rating) return false;

    if (filters.freeDelivery && !product.freeDelivery) return false;

    if (filters.offer && !product.isOffer) return false;

    return true;
  });

  // 2️⃣ SORT LOGIC (FIXES YOUR ERROR)
  if (sortType === "low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.new_price - b.new_price
    );
  }

  if (sortType === "high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.new_price - a.new_price
    );
  }

  if (sortType === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating
    );
  }

  return (
    <div className="product-grid-container">

      {/* ⭐ PRODUCT GRID */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt="" />
              <h4>{p.name}</h4>
              <p>₹{p.new_price}</p>
            </div>
          ))
        ) : (
          <h2>No Products Found</h2>
        )}
      </div>

    </div>
  );
};

export default ProductGrid;
