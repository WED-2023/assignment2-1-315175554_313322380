<template>
  <div class="container">
    <h1 class="title">Main Page</h1>

    <!-- Random Recipes - Always visible -->
    <RecipePreviewList 
      title="Random Recipes" 
      :recipes="randomRecipes" 
      class="RandomRecipes center" 
    />

    <!-- Login prompt for non-logged in users -->
    <router-link v-if="!isLoggedIn" to="/login" tag="button" class="btn btn-primary">
      You need to log in to view this
    </router-link>

    <!-- Last Reviewed Recipes (for logged-in users) -->
    <div v-if="isLoggedIn && lastReviewedRecipes.length > 0">
      <RecipePreviewList 
        title="Last Reviewed Recipes" 
        :recipes="lastReviewedRecipes" 
        class="RandomRecipes center" 
      />
    </div>

    <!-- Message if no last reviewed recipes are available -->
    <div v-else-if="isLoggedIn">
      <p>No last reviewed recipes available.</p>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import axios from 'axios'; // Ensure axios is imported to make API calls

export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      randomRecipes: [], // Will hold random recipes fetched from backend
      lastReviewedRecipes: [] // Will hold last reviewed recipes loaded from localStorage
    };
  },
  computed: {
    isLoggedIn() {
      return !!this.$root.store.username; // Check if the user is logged in
    }
  },
  methods: {
    async fetchRandomRecipes() {
      try {
        const response = await axios.get(`${this.$root.store.server_domain}/recipes/recipe/random`);
        this.randomRecipes = response.data; // Store the random recipes in the state
      } catch (error) {
        console.error('Error fetching random recipes:', error);
      }
    }
  },
  mounted() {
    // Fetch random recipes when the component is mounted
    this.fetchRandomRecipes();

    if (this.isLoggedIn) {
      // Load last reviewed recipes from localStorage
      this.lastReviewedRecipes = JSON.parse(localStorage.getItem('lastReviewedRecipes')) || [];
    }
  }
};
</script>
