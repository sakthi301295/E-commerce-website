import React, { useState } from "react";
import "./CSS/Shop.css";
import FiltersSidebar from "../components/Filters/FiltersSidebar";
import ProductGrid from "../components/Products/ProductGrid";
import Hero from "../components/Hero/Hero";
import Popular from "../components/popular/Popular";
import { Offer } from "../components/Offers/Offers";
import NewCollections from "../components/NewCollections/NewCollections";
import { NewsLetter } from "../components/NewsLetter/NewsLetter";
import FilterChips from "../components/Filters/FilterChips";


export const Shop = () => {

  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    price: 5000,
    rating: 0,
    freeDelivery: false,
    offer: false,
  });

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortType, setSortType] = useState("");

  const filtersActive =
    filters.categories.length > 0 ||
    filters.brands.length > 0 ||
    filters.price < 5000 ||
    filters.rating > 0 ||
    filters.freeDelivery ||
    filters.offer;

  return (
    <div className="shop-container">

      <button className="mobile-filter-btn" onClick={() => setMobileFilterOpen(true)}>
        ☰ Filters
      </button>

      <FiltersSidebar
        filters={filters}
        setFilters={setFilters}
        mobileFilterOpen={mobileFilterOpen}
        setMobileFilterOpen={setMobileFilterOpen}
      />

      <div className="shop-content">

        <Hero />

       {filtersActive && (
  <div className="shop-products-area">

    <FilterChips filters={filters} setFilters={setFilters} />

    <div className="sorting-bar">
      <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
        <option value="">Sort by</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="rating">Customer Rating</option>
        <option value="newest">Newest Arrivals</option>
      </select>
    </div>

    <ProductGrid filters={filters} sortType={sortType} />
  </div>
)}

        <Popular />
        <Offer />
        <NewCollections />
        <NewsLetter />

      </div>
    </div>
  );
};

export default Shop;
