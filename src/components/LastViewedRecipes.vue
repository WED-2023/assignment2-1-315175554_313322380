<template>
    <div v-if="lastViewedRecipes.length">
      <b-row>
        <b-col v-for="recipe in lastViewedRecipes" :key="recipe.id">
          <RecipePreview class="recipePreview" :recipe="recipe" />
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <p>No last viewed recipes available.</p>
    </div>
  </template>
  
  <script>
  import RecipePreview from "./RecipePreview.vue";
  
  export default {
    components: {
      RecipePreview
    },
    props: {
      lastViewedRecipes: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .recipePreview {
    margin: 10px 0;
  }
  </style>
  