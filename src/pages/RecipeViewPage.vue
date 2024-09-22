<template>
  <div v-if="recipe">
    <h1>{{ recipe.title }}</h1>
    <img :src="recipe.image" class="center" />
    <p>{{ recipe.summary }}</p>
    
    <h2>Ingredients</h2>
    <ul>
      <li v-for="(ingredient, index) in recipe.extendedIngredients" :key="index">
        {{ ingredient.original }}
      </li>
    </ul>

    <h2>Instructions</h2>
    <ol>
      <li v-for="(instruction, index) in recipe._instructions" :key="index">
        {{ instruction.step }}
      </li>
    </ol>
  </div>
</template>

<script>
import { mockGetRecipeFullDetails } from "../services/recipes.js"; // Import your data service

export default {
  data() {
    return {
      recipe: null
    };
  },
  created() {
    const recipeId = this.$route.params.recipeId;  // Access the `recipeId` from the route
    this.fetchRecipe(recipeId);                    // Fetch the recipe details
  },
  methods: {
    fetchRecipe(id) {
      const response = mockGetRecipeFullDetails(id);  // Mock service or API call
      this.recipe = response.data.recipe;             // Set the fetched recipe
    }
  }
};
</script>


<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.wrapped {
  flex: 1 1 45%;
  min-width: 300px;
  padding: 10px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  max-width: 600px;
}
</style>
