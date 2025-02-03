import React, { useState } from "react";
import ShoppingList from "./ShoppingList";

function App() {
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  function handleDarkModeClick() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <header>
        <h1>Grocery List</h1>
        <button onClick={handleDarkModeClick}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList />
    </div>
  );
}

export default App;
