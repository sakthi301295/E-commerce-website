import React from "react";
import { useLocation } from "react-router-dom";
import ProductGrid from "../components/Products/ProductGrid";
import FiltersSidebar from "../components/Filters/FiltersSidebar";
import FilterChips from "../components/Filters/FilterChips";
import "../pages/CSS/FilterResult.css";

const FilterResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const filtersFromUrl = {
    categories: query.get("categories")?.split(",") || [],
    brands: query.get("brands")?.split(",") || [],
    price: Number(query.get("price")) || 5000,
    rating: Number(query.get("rating")) || 0,
    freeDelivery: query.get("freeDelivery") === "true",
    offer: query.get("offer") === "true",
  };

  const [filters, setFilters] = React.useState(filtersFromUrl);

  return (
    <div className="filter-results-container">

      <FiltersSidebar filters={filters} setFilters={setFilters} />

      <div className="filter-results-content">
 
        <FilterChips filters={filters} setFilters={setFilters} />

        <h2 className="results-title">Search Results</h2>

        <ProductGrid filters={filters} sortType="" />
      </div>
    </div>
  );
};

export default FilterResults;
