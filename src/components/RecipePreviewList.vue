<template>
  <b-container>
    <h3>
      {{ title }}
      <slot></slot>
    </h3>

    <!-- Display Random or Last Reviewed Recipes based on prop -->
    <b-row>
      <b-col v-for="r in displayedRecipes" :key="r.id" cols="12" md="6" lg="4">
        <RecipePreview class="recipePreview" :recipe="r" @reviewed="addReviewedRecipe(r)" />
      </b-col>
    </b-row>

    <!-- Show Refresh Button only for random recipes -->
    <b-button v-if="!lastReviewedRecipes" @click="updateRecipes" variant="primary" class="mb-3">Refresh Recipes</b-button>

    <!-- Display error message if there's an issue -->
    <b-alert v-if="errorMessage" variant="danger">{{ errorMessage }}</b-alert>

    <!-- Show spinner while loading -->
    <b-spinner v-if="loading" label="Loading..." />
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
import axios from 'axios'; // Ensure Axios is imported

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: String, // Accepts the title for different sections
    lastReviewedRecipes: {
      type: Array,
      default: null // If null, it will default to random recipes
    }
  },
  data() {
    return {
      randomRecipes: [], // Holds random recipes
      loading: false,    // Loading state for spinner
      errorMessage: ''   // Error message for alert
    };
  },
  computed: {
    displayedRecipes() {
      // Show last reviewed recipes if provided, otherwise random recipes
      return this.lastReviewedRecipes || this.randomRecipes;
    }
  },
  mounted() {
    // Fetch random recipes if no last reviewed recipes are provided
    if (!this.lastReviewedRecipes) {
      this.updateRecipes();
    }
  },
  methods: {
    async updateRecipes() {
      this.loading = true;
      this.errorMessage = '';
      try {
        const response = await axios.get('http://localhost:3000/recipes/recipe/random', {
          params: { number: 3 } // Get 3 random recipes
        });
        this.randomRecipes = response.data; // Store random recipes
      } catch (error) {
        console.error('Error fetching random recipes:', error);
        this.errorMessage = "Error fetching random recipes."; // Display user-friendly error
      } finally {
        this.loading = false;
      }
    },
    addReviewedRecipe(recipe) {
      this.$emit('reviewed', recipe); // Emit reviewed event upwards
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100px;
}

.recipePreview {
  margin-bottom: 20px;
}
</style>
