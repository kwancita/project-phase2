import React from "react";

function Filter({ search, onCategoryChange, onSearchChange }) {
  return (
      <div className="filter-div">
          <div className="Filter">
            <input 
                type="text" 
                name="search" 
                placeholder="Search..." 
                value={search}
                onChange={onSearchChange}
            />
            <select name="filter" onChange={onCategoryChange}>
                <option value="All">All poduct</option>
                <option value="bronzer">Bronzer</option>
                <option value="blush">Blush</option>
                <option value="lip_liner">Lip liner</option>
                <option value="foundation">Foundation</option>
                <option value="eyeshadow">Eyeshadow</option>
                <option value="eyeliner">Eyeliner</option>
                <option value="nail_polish">Nail polish</option>
                <option value="lipstick">Lipstick</option>
                <option value="mascara">Mascara</option>
            </select>
    </div>
      </div>
  );
}

export default Filter;
