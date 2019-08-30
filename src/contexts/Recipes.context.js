import React, { createContext, useState } from "react";
import seedRecipes from "../seedRecipes";
/* import axios from "axios";
 */
export const RecipesContext = createContext();

export default function RecipesProvider(props) {
  /*   const APP_KEY = "7544ed837eb08e30fcae4872309b7963";
  const APP_ID = "630e94e4";

  const req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  useEffect(() => {
    async function fetchData() {
      const result = await axios(req);
      console.log(result);
    }
    fetchData();
  });
 */

  const [recipes, setRecipes] = useState(seedRecipes);

  return (
    <div>
      <RecipesContext.Provider value={{ recipes }}>
        {props.children}
      </RecipesContext.Provider>
    </div>
  );
}
