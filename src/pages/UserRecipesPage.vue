<template>
    <div class="user-recipes-page">
      <h1>My Added Recipes</h1>
  
      <!-- Check if there are added recipes -->
      <div v-if="addedRecipes.length === 0" class="no-recipes">
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
  export default {
    data() {
      return {
        addedRecipes: []
      };
    },
    methods: {
      // Method to load added recipes from localStorage (or backend)
      loadAddedRecipes() {
        const storedRecipes = localStorage.getItem("addedRecipes");
        if (storedRecipes) {
          this.addedRecipes = JSON.parse(storedRecipes);
        }
      },
  
      // Method to remove a recipe from the list
      removeRecipe(recipeId) {
        this.addedRecipes = this.addedRecipes.filter(recipe => recipe.id !== recipeId);
        localStorage.setItem("addedRecipes", JSON.stringify(this.addedRecipes)); // Update localStorage
      }
    },
    mounted() {
      this.loadAddedRecipes(); // Load added recipes when component is mounted
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
  </style>
  