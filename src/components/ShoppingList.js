import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // State for Selected Category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle Category Change
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Filter Items Based on Selected Category
  const filteredItems = items.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <label>
        Filter by Category:
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
        </select>
      </label>
      <ul>
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
