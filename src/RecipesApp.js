import React from "react";
import Navbar from "./Navbar";
import RecipesProvider from "./contexts/Recipes.context";
import RecipesList from "./RecipesList";

export default function RecipesApp() {
  return (
    <div>
      <RecipesProvider>
        <Navbar />
        <RecipesList/>
      </RecipesProvider>
    </div>
  );
}
