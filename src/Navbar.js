import React from "react";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <h1>FoodPorn</h1>
      </div>
      <div>
        <ul>
          <li>Recipes</li>
          <li>Create</li>
          <li>Search</li>
        </ul>
      </div>
    </div>
  );
}
