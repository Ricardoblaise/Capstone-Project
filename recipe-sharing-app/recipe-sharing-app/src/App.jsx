import React from "react"
import RecipeList from "./components/RecipeList"
import AddRecipeForm from "./components/AddRecipeForm"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Recipe Sharing App</h1>
        <AddRecipe />
        <RecipeList />
    </div>
  );
};

export default App
