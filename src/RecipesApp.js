import React from "react";
import Navbar from "./Navbar";
import RecipesProvider from "./contexts/Recipes.context";
import RecipeShow from "./RecipeShow";
import RecipesList from "./RecipesList";
import "../src/styles/RecipesApp.css";
import { Route, Switch } from "react-router-dom";

export default function RecipesApp() {
  return (
    <div className="recipesApp">
      <RecipesProvider>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => <RecipesList {...routeProps} />}
          />
          <Route
            exact
            path="/recipe/:recipeId"
            render={routeProps => (
              <RecipeShow
                {...routeProps}
                recipeId={routeProps.match.params.recipeId}
              />
            )}
          />
        </Switch>
      </RecipesProvider>
    </div>
  );
}
