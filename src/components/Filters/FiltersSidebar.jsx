import React, { useState } from "react";
import "./FiltersSidebar.css";

const FiltersSidebar = ({ filters, setFilters }) => {
  const [openSection, setOpenSection] = useState("category");

  const toggle = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const handleCheckbox = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((i) => i !== value)
        : [...prev[type], value],
    }));
  };

  return (
    <div className="filters-sidebar">
      <h3 className="filter-title">☰ Filters</h3>
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggle("category")}>
          <h4>Category</h4>
          <span>{openSection === "category" ? "-" : "+"}</span>
        </div>

        {openSection === "category" && (
          <div className="filter-body">
            {["men", "women", "kids"].map((cat) => (
              <label key={cat}>
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat)}
                  onChange={() => handleCheckbox("categories", cat)}
                />
                {cat.toUpperCase()}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggle("brand")}>
          <h4>Brands</h4>
          <span>{openSection === "brand" ? "-" : "+"}</span>
        </div>

        {openSection === "brand" && (
          <div className="filter-body">
            {["nike", "adidas", "puma", "levis"].map((brand) => (
              <label key={brand}>
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleCheckbox("brands", brand)}
                />
                {brand.toUpperCase()}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggle("price")}>
          <h4>Price</h4>
          <span>{openSection === "price" ? "-" : "+"}</span>
        </div>

        {openSection === "price" && (
          <div className="filter-body">
            <input
              type="range"
              min="100"
              max="5000"
              value={filters.price}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  price: Number(e.target.value),
                }))
              }
            />
            <div className="price-values">
              <span>₹100</span>
              <span>₹{filters.price}</span>
            </div>
          </div>
        )}
      </div>
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggle("rating")}>
          <h4>Rating</h4>
          <span>{openSection === "rating" ? "-" : "+"}</span>
        </div>

        {openSection === "rating" && (
          <div className="filter-body">
            {[5, 4, 3].map((star) => (
              <label key={star}>
                <input
                  type="radio"
                  name="rating"
                  checked={filters.rating === star}
                  onChange={() =>
                    setFilters((prev) => ({ ...prev, rating: star }))
                  }
                />
                {`${"⭐".repeat(star)} & Above`}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggle("other")}>
          <h4>Other Filters</h4>
          <span>{openSection === "other" ? "-" : "+"}</span>
        </div>

        {openSection === "other" && (
          <div className="filter-body">
            <label>
              <input
                type="checkbox"
                checked={filters.freeDelivery}
                onChange={() =>
                  setFilters((p) => ({ ...p, freeDelivery: !p.freeDelivery }))
                }
              />
              Free Delivery
            </label>

            <label>
              <input
                type="checkbox"
                checked={filters.offer}
                onChange={() => setFilters((p) => ({ ...p, offer: !p.offer }))}
              />
              Offer Items Only
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FiltersSidebar;
