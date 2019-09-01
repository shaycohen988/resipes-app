import React from "react";
import "./styles/Navbar.css";
export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <h1>FoodPorn</h1>
      </div>

      <ul className="navbar-links-continer">
        <li className="navbar-links border-red"><span></span>Recipes</li>
        <li className="navbar-links border-green"><span></span>Create</li>
        <li className="navbar-links border-blue"><span></span>Search...</li>
      </ul>
    </div>
  );
}
