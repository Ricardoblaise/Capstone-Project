import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],

  // Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Generate recommendations based on favorites
  recommendations: [],
  generateRecommendations: () => set((state) => {
    // Mock implementation: select recipes from favorites or similar
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Set recipes and filter based on search term
  setRecipes: (recipes) => set((state) => ({
    recipes,
    filteredRecipes: recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  searchTerm: '',
  setSearchTerm: (term) => set((state) => {
    const newSearchTerm = term.toLowerCase();
    return {
      searchTerm: newSearchTerm,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(newSearchTerm)
      )
    };
  }),

  filteredRecipes: [],
}));

export default useRecipeStore;