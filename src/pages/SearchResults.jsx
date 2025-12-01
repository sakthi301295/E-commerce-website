import React, { useContext } from "react";
import { ShopContext } from "../components/Context/ShopContext";
import "./CSS/SearchResults.css";

export const SearchResults = () => {
  const { searchQuery, searchResults, setSearchQuery, loading } =
    useContext(ShopContext);

  const highlight = (text) => {
    if (!searchQuery) return text;

    const regex = new RegExp(`(${searchQuery})`, "ig");
    return text.replace(regex, "<mark>$1</mark>");
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <input
          className="search-box"
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />

        {searchQuery && (
          <button className="clear-btn" onClick={() => setSearchQuery("")}>
            ✖
          </button>
        )}
      </div>

      {loading && <p className="loading">Searching...</p>}

      {!searchQuery && !loading && (
        <p className="empty">Type something to search...</p>
      )}
      <div className="search-grid">
        {!loading && searchQuery && searchResults.length > 0
          ? searchResults.map((item) => (
              <div
                className="search-card"
                key={item.id}
                onClick={() => (window.location.href = `/product/${item.id}`)}
              >
                <img src={item.image} alt={item.name} />

                <p
                  className="name"
                  dangerouslySetInnerHTML={{ __html: highlight(item.name) }}
                />

                <p className="price">₹{item.new_price}</p>
              </div>
            ))
          : searchQuery &&
            !loading &&
            searchResults.length === 0 && <p>No results found!</p>}
      </div>
    </div>
  );
};

export default SearchResults;
