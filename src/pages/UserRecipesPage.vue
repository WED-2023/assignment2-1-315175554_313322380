<template>
  <div class="user-recipes-page">
    <h1>My Added Recipes</h1>

    <!-- Check if there are added recipes -->
    <div v-if="loading" class="loading">
      <p>Loading recipes...</p>
    </div>
    <div v-if="addedRecipes.length === 0 && !loading" class="no-recipes">
      <p>You haven't added any recipes yet.</p>
    </div>

    <!-- Display added recipes in cards -->
    <div v-else class="recipe-grid">
      <div v-for="recipe in addedRecipes" :key="recipe.id" class="recipe-card">
        <img :src="recipe.image" alt="Recipe Image" class="recipe-img" />
        <div class="recipe-info">
          <h2>{{ recipe.name }}</h2>
          <p>{{ recipe.description }}</p>
          <b-button variant="danger" @click="removeRecipe(recipe.id)">Remove Recipe</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      addedRecipes: [],
      loading: false, // For tracking loading state
    };
  },
  methods: {
    // Method to load added recipes from the server
    async loadAddedRecipes() {
      try {
        this.loading = true; // Set loading state to true while fetching
        const response = await axios.get('http://localhost:3000/api/recipes'); // Adjust the URL as per your API
        this.addedRecipes = response.data;
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        this.loading = false; // Set loading to false after fetching
      }
    },

    // Method to remove a recipe by making a DELETE request to the server
    async removeRecipe(recipeId) {
      try {
        await axios.delete(`http://localhost:3000/api/recipes/${recipeId}`); // Adjust the URL as per your API
        this.addedRecipes = this.addedRecipes.filter(recipe => recipe.id !== recipeId);
      } catch (error) {
        console.error('Error removing recipe:', error);
      }
    }
  },
  mounted() {
    this.loadAddedRecipes(); // Load added recipes from server when component is mounted
  }
};
</script>

<style lang="scss" scoped>
.user-recipes-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
}

.no-recipes {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.recipe-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.recipe-img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
}

.recipe-info h2 {
  font-size: 1.5rem;
  color: #3498db;
  margin-bottom: 10px;
}

.recipe-info p {
  color: #7f8c8d;
  margin-bottom: 15px;
}

.loading {
  font-size: 1.2rem;
  color: #7f8c8d;
}
</style>
