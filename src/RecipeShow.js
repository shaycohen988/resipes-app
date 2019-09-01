import React, { useContext } from "react";
import { RecipesContext } from "./contexts/Recipes.context";

export default function RecipeShow(props) {
  const { label, image } = props;
  const { findRecipeById } = useContext(RecipesContext);

  console.log(findRecipeById(1));

  const recipe = findRecipeById(1);
  return (
    <div>
      <h1>RecipeShow</h1>
      {recipe.label}
    </div>
  );
}
