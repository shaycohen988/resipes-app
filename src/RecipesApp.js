import React, { useEffect } from "react";
import axios from "axios";

export default function RecipesApp() {
  const APP_KEY = "7544ed837eb08e30fcae4872309b7963";
  const APP_ID = "630e94e4";

  const req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    async function fetchData() {
      const result = await axios(req);
      console.log(result);
    }
    fetchData();
  });

  return (
    <div>
      <h1> RecipדדApp</h1>
    </div>
  );
}
