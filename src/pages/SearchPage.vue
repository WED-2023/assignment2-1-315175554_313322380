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
        <b-dropdown id="cuisine-dropdown" :text="selectedCuisine || 'Cuisine'" class="mr-2" variant="secondary">
          <b-dropdown-item v-for="c in cuisines" :key="c" @click="selectedCuisine = c">{{ c }}</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="diet-dropdown" :text="selectedDiet || 'Diet'" class="mr-2" variant="secondary">
          <b-dropdown-item v-for="d in diets" :key="d" @click="selectedDiet = d">{{ d }}</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="intolerance-dropdown" :text="selectedIntolerance || 'Intolerance'" class="mr-2" variant="secondary">
          <b-dropdown-item v-for="i in intolerances" :key="i" @click="selectedIntolerance = i">{{ i }}</b-dropdown-item>
        </b-dropdown>

        <b-form-select v-model="numberOfResults" :options="resultsOptions" class="mr-2" size="sm" />
        <b-button @click="resetFilters" variant="outline-danger" size="sm">Clear Filters</b-button>
      </div>
    </b-form>

    <!-- Display Filter Summary if Filters Applied -->
    <div v-if="selectedCuisine || selectedDiet || selectedIntolerance" class="filter-summary text-center mb-4">
      <p>Showing results with 
        <strong v-if="selectedCuisine">Cuisine: {{ selectedCuisine }}</strong> 
        <strong v-if="selectedDiet">, Diet: {{ selectedDiet }}</strong> 
        <strong v-if="selectedIntolerance">, Intolerance: {{ selectedIntolerance }}</strong>.
      </p>
    </div>

    <!-- Loading and Error Handling -->
    <div v-if="loading" class="loading-message text-center my-4">
      <b-spinner small label="Searching..."></b-spinner>
      <span class="ml-2">Searching...</span>
    </div>

    <b-alert v-if="error" variant="danger" dismissible>
      {{ error }}
    </b-alert>

    <!-- Search Results -->
    <div v-if="!loading && recipes.length > 0" class="result-info text-center">
      <p>{{ recipes.length }} results found for "{{ query }}".</p>
      <RecipePreviewList :recipes="recipes" />
    </div>

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
  if (!this.query) return; // Ensure query is present before searching

  this.loading = true;
  this.error = null;
  this.recipes = [];

  try {
    // Logging the API call for debugging
    console.log("Sending API request with the following params:", {
      titleMatch: this.query, // Use titleMatch for better results
      cuisine: this.selectedCuisine,
      diet: this.selectedDiet,
      intolerance: this.selectedIntolerance,
      number: this.numberOfResults
    });

    const response = await axios.get("http://localhost:3000/recipes/search", {
      params: {
        titleMatch: this.query, // Send the query as titleMatch
        cuisine: this.selectedCuisine,
        diet: this.selectedDiet,
        intolerance: this.selectedIntolerance,
        number: this.numberOfResults
      }
    });

    console.log("API response received:", response.data);

    // Map results directly from the API response
    this.recipes = response.data.map(recipe => ({
      id: recipe.id,
      name: recipe.title, 
    }));

    if (this.recipes.length === 0) {
      this.error = `No recipes found for "${this.query}".`;
    }

    this.query = ''; // Clear search field after submission

  } catch (error) {
    console.error("Error searching recipes:", error.response ? error.response.data : error.message);
    this.error = "Error fetching search results. Please check the network or server logs.";
  } finally {
    this.loading = false;
  }
}
,
//     async fetchAutocompleteSuggestions() {
//       if (this.query.length < 3) return; // Limit autocomplete to queries with 3 or more characters

//       try {
//         const response = await axios.get(this.$root.store.server_domain + "/recipes/autocomplete", {
//           params: { query: this.query }
//         });
//         this.suggestions = response.data;
//       } catch (error) {
//         console.error("Error fetching suggestions:", error);
//       }
//     },
//     resetFilters() {
//       this.selectedCuisine = null;
//       this.selectedDiet = null;
//       this.selectedIntolerance = null;
//     }
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

.filter-summary {
  font-size: 1rem;
  color: #666;
}

.result-info {
  font-size: 1rem;
  color: #555;
}
</style>
