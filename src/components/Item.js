import React, { useState } from "react";

function Item({ name, category }) {
  // State to Track if Item is in Cart
  const [inCart, setInCart] = useState(false);

  // Toggle In-Cart State
  function handleAddToCart() {
    setInCart((prevState) => !prevState);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
