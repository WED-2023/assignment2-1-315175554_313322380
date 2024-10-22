<template>
  <div v-if="recipe">
    <h1>{{ recipe.title }}</h1>
    <img :src="recipe.image" class="center" alt="Recipe image" />
    <p v-html="recipe.summary"></p> <!-- Use v-html to render HTML content if summary contains HTML -->

    <h2>Ingredients</h2>
    <ul>
      <li v-for="(ingredient, index) in recipe.extendedIngredients" :key="index">
        {{ ingredient.original }}
      </li>
    </ul>

    <h2>Instructions</h2>
    <ol>
      <li v-for="(instruction, index) in recipe.instructions" :key="index">
        {{ instruction.step }}
      </li>
    </ol>
  </div>

  <div v-else>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      recipe: null, // Recipe data
      errorMessage: "", // Error message in case of an API failure
    };
  },
  created() {
    const recipeId = this.$route.params.recipeId; // Get the recipe ID from the route
    this.fetchRecipe(recipeId); // Fetch the recipe details when the component is created
  },
  methods: {
    // Fetch the recipe details from the API
    async fetchRecipe(id) {
      try {
        const response = await axios.get(`http://localhost:3000/recipes/${id}`); // API call to your backend
        this.recipe = response.data; // Store the fetched recipe details

        // If the recipe contains instructions in analyzedInstructions
        if (this.recipe.analyzedInstructions && this.recipe.analyzedInstructions.length > 0) {
          this.recipe.instructions = this.recipe.analyzedInstructions[0].steps; // Use the first set of analyzed instructions
        } else {
          this.recipe.instructions = [{ step: "No instructions available" }]; // Default message if no instructions
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
        this.errorMessage = "Failed to load recipe details."; // Set an error message
      }
    },
  },
};
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  max-width: 600px;
}
</style>
