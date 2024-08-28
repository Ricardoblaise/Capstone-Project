import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to update the search term
  setSearchTerm: (term) => set((state) => {
    const newSearchTerm = term.toLowerCase();
    return {
      searchTerm: newSearchTerm,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(newSearchTerm)
      )
    };
  }),

  // Action to set initial recipes and filter them
  setRecipes: (recipes) => set((state) => ({
    recipes,
    filteredRecipes: recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm)
    )
  }))
}));

export default useRecipeStore; 