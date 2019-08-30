import React, { useContext } from "react";
import { RecipesContext } from "./contexts/Recipes.context";

export default function RecipesList() {
  const { recipes } = useContext(RecipesContext);

  console.log(recipes);
  return (
    <div>
      <h1>RecipesList</h1>
      {recipes.map(recipe => (
        <h1>{recipe.label}</h1>
      ))}
    </div>
  );
}
