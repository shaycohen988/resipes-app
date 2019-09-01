import React from "react";
import "./styles/Recipe.css";

export default function Recipe(props) {
  const { label, image } = props;

  console.log(label);
  return (
    <div className="singleRecipe">
      <img className="singleRecipe-img" src={image}></img>
      <div>
        <h2 className="singleRecipe-title">{label}</h2>
        <p className="singleRecipe-by">by david koko</p>
      </div>
      <button className="singleRecipe-button">The Recipe</button>
    </div>
  );
}
