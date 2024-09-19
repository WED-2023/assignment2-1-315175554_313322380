<template>
  <div class="container">
    <h1 class="title">Search Recipes</h1>

    <!-- Search Bar -->
    <b-form @submit.prevent="searchRecipes" inline>
      <b-form-input
        v-model="query"
        placeholder="Search for a recipe..."
        class="mr-2"
        style="width: 300px"
      />
      <b-button type="submit" variant="primary">Search</b-button>
    </b-form>

    <!-- Loading and Error Handling -->
    <div v-if="loading" class="loading-message">Searching...</div>
    <div v-if="error">{{ error }}</div>

    <!-- Search Results -->
    <RecipePreviewList
      v-if="!loading && recipes.length > 0"
      title="Search Results"
      :recipes="recipes"
    />

    <!-- No Results -->
    <div v-if="!loading && recipes.length === 0 && query" class="no-results">
      No recipes found for "{{ query }}".
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import { mockSearchRecipes } from "../services/recipes.js"; // Replace with actual search API

export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      query: "", // User's search query
      recipes: [], // Search results
      loading: false, // Tracks loading state
      error: null // Error handling
    };
  },
  methods: {
    async searchRecipes() {
      if (!this.query) return; // Do nothing if the query is empty

      this.loading = true;
      this.error = null;

      try {
        // Simulate API call to search for recipes (replace with actual API call)
        this.recipes = await mockSearchRecipes(this.query);
      } catch (error) {
        console.error("Error searching recipes:", error);
        this.error = "Error fetching search results.";
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.loading-message {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: #555;
}

.no-results {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: #888;
}
</style>
