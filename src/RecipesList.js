import React, { useContext } from "react";
import { RecipesContext } from "./contexts/Recipes.context";
import Recipe from "./Recipe";
import "./styles/RecipesList.css";

export default function RecipesList() {
  const { recipes } = useContext(RecipesContext);

  console.log(recipes);
  return (
    <div className="recipesList">
      {recipes.map(recipe => (
        <>
          <Recipe key={recipe.id} {...recipe} />
        </>
      ))}
    </div>
  );
}
