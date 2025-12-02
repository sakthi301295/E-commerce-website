import React from "react";
import "./FilterChips.css";

const FilterChips = ({ filters, setFilters }) => {

  const removeChip = (type, value) => {
    if (type === "categories" || type === "brands") {
      setFilters(prev => ({
        ...prev,
        [type]: prev[type].filter(item => item !== value),
      }));
    } 
    else if (type === "rating") {
      setFilters(prev => ({ ...prev, rating: 0 }));
    }
    else if (type === "price") {
      setFilters(prev => ({ ...prev, price: 5000 }));
    }
    else if (type === "freeDelivery") {
      setFilters(prev => ({ ...prev, freeDelivery: false }));
    }
    else if (type === "offer") {
      setFilters(prev => ({ ...prev, offer: false }));
    }
  };

  const clearAll = () => {
    setFilters({
      categories: [],
      brands: [],
      price: 5000,
      rating: 0,
      freeDelivery: false,
      offer: false,
    });
  };

  const chips = [];

  filters.categories.forEach((c) =>
    chips.push({ label: c.toUpperCase(), type: "categories", value: c })
  );

  filters.brands.forEach((b) =>
    chips.push({ label: b.toUpperCase(), type: "brands", value: b })
  );

  if (filters.rating > 0)
    chips.push({ label: `${filters.rating} ⭐ & UP`, type: "rating", value: filters.rating });

  if (filters.price < 5000)
    chips.push({ label: `Under ₹${filters.price}`, type: "price", value: filters.price });

  if (filters.freeDelivery)
    chips.push({ label: "Free Delivery", type: "freeDelivery", value: true });

  if (filters.offer)
    chips.push({ label: "Offer Only", type: "offer", value: true });

  if (!chips.length) return null;

  return (
    <div className="chips-container">
      {chips.map((chip, i) => (
        <div className="chip" key={i}>
          {chip.label}
          <span className="chip-close" onClick={() => removeChip(chip.type, chip.value)}>×</span>
        </div>
      ))}
      <button className="clear-all" onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default FilterChips;
