import React from 'react';

function Sidebar({ categories, onFilterChange }) {
  const handleCategoryChange = (e) => {
    onFilterChange({ category: e.target.value });
  };

  const handlePriceRangeChange = (e) => {
    onFilterChange({ priceRange: e.target.value });
  };


  return (
    <div className="card p-3">
      <h5>Filters</h5>
      <div className="mb-3">
        <h6>Category</h6>
        <select className="form-select" onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <h6>Price Range</h6>
        <select className="form-select" onChange={handlePriceRangeChange}>
          <option value="">All Prices</option>
          <option value="0-50">0 - 50</option>
          <option value="50-100">50 - 100</option>
          <option value="100-200">100 - 200</option>
          <option value="200+">200+</option>
        </select>
      </div>     
    </div>
  );
}

export default Sidebar;
