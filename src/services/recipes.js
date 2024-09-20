import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_list from "../assets/mocks/recipe_preview.json"; 

export function mockGetRecipesPreview(amount = 3) {
  if (!Array.isArray(recipe_list)) {
    console.error("recipe_list should be an array of recipes.");
    return { data: { recipes: [] } };
  }

  // Shuffle the recipe array and pick a subset
  const shuffledRecipes = recipe_list.sort(() => 0.5 - Math.random());
  const recipes = shuffledRecipes.slice(0, amount); // Select the amount you want

  return { data: { recipes: recipes } };
}

export function mockGetRecipeFullDetails(recipeId) {
  return { data: { recipe: recipe_full_view } };
}
