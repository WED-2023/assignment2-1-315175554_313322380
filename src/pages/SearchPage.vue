<template>
  <div class="container py-5">
    <h1 class="title text-center mb-4">Search Recipes</h1>

    <!-- Search Bar with Autocomplete -->
    <b-form @submit.prevent="searchRecipes" class="text-center">
      <div class="d-flex justify-content-center mb-3">
        <b-form-input
          v-model="query"
          placeholder="Search for a recipe..."
          class="mr-2 search-input"
          style="width: 300px"
          @input="fetchAutocompleteSuggestions"
          list="autocomplete-options"
        />
        <datalist id="autocomplete-options">
          <option v-for="suggestion in suggestions" :key="suggestion">{{ suggestion }}</option>
        </datalist>
        <b-button :disabled="loading || !query" type="submit" variant="primary">
          <span v-if="loading">
            <b-spinner small></b-spinner> Searching...
          </span>
          <span v-else>Search</span>
        </b-button>
      </div>

      <!-- Filter Dropdowns -->
      <div class="filters d-flex justify-content-center mb-4">
        <b-dropdown id="cuisine-dropdown" text="Cuisine" class="mr-2" variant="secondary">
          <b-dropdown-item v-for="c in cuisines" :key="c" @click="selectedCuisine = c">{{ c }}</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="diet-dropdown" text="Diet" class="mr-2" variant="secondary">
          <b-dropdown-item v-for="d in diets" :key="d" @click="selectedDiet = d">{{ d }}</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="intolerance-dropdown" text="Intolerance" class="mr-2" variant="secondary">
          <b-dropdown-item v-for="i in intolerances" :key="i" @click="selectedIntolerance = i">{{ i }}</b-dropdown-item>
        </b-dropdown>

        <b-form-select v-model="numberOfResults" :options="resultsOptions" class="mr-2" size="sm" />
        <b-button @click="resetFilters" variant="outline-danger" size="sm">Clear Filters</b-button>
      </div>
    </b-form>

    <!-- Loading and Error Handling -->
    <div v-if="loading" class="loading-message text-center my-4">
      <b-spinner small label="Searching..."></b-spinner>
      <span class="ml-2">Searching...</span>
    </div>

    <b-alert v-if="error" variant="danger" dismissible>
      {{ error }}
    </b-alert>

    <!-- Search Results -->
    <RecipePreviewList
      v-if="!loading && recipes.length > 0 && query"
      title="Search Results"
      :recipes="recipes"
    />

    <!-- No Results -->
    <div v-if="!loading && recipes.length === 0 && query" class="no-results text-center mt-4">
      No recipes found for "{{ query }}".
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import axios from "axios";

export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      query: "", // User's search query
      recipes: [], // Search results
      loading: false, // Tracks loading state
      error: null, // Error handling
      suggestions: [], // Autocomplete suggestions
      selectedCuisine: null, // Cuisine filter
      selectedDiet: null, // Diet filter
      selectedIntolerance: null, // Intolerance filter
      numberOfResults: 5, // Default number of results
      resultsOptions: [5, 10, 15], // Options for number of results
      cuisines: ["Italian", "Chinese", "American"], // Available cuisines
      diets: ["Vegetarian", "Vegan", "Keto"], // Available diets
      intolerances: ["Gluten", "Dairy", "Peanut"] // Available intolerances
    };
  },
  methods: {
    async searchRecipes() {
      if (!this.query) return;  // Ensure query is present before searching

      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(this.$root.store.server_domain + "/recipes/search", {
          params: {
            recipeName: this.query, // Send the query to search by recipe name
            cuisine: this.selectedCuisine,
            diet: this.selectedDiet,
            intolerance: this.selectedIntolerance,
            number: this.numberOfResults
          }
        });

        // Ensure that the response includes only the recipes with names that match the query
        this.recipes = response.data.filter(recipe =>
          recipe.name.toLowerCase().includes(this.query.toLowerCase())
        );

        if (this.recipes.length === 0) {
          this.error = `No recipes found for "${this.query}".`;
        }
      } catch (error) {
        console.error("Error searching recipes:", error);
        this.error = "Error fetching search results.";
      } finally {
        this.loading = false;
      }
    },
    async fetchAutocompleteSuggestions() {
      if (this.query.length < 3) return; // Limit autocomplete to queries with 3 or more characters

      try {
        const response = await axios.get(this.$root.store.server_domain + "/recipes/autocomplete", {
          params: { query: this.query }
        });
        this.suggestions = response.data;
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    },
    resetFilters() {
      this.selectedCuisine = null;
      this.selectedDiet = null;
      this.selectedIntolerance = null;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  font-weight: bold;
}

.filters {
  margin-top: 1rem;
}

.search-input {
  font-size: 1.1rem;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.loading-message {
  font-size: 1.25rem;
  color: #555;
}

.no-results {
  font-size: 1.25rem;
  color: #888;
}
</style>
