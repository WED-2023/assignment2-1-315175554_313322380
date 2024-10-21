<template>
  <div class="container">
    <h1 class="title">Main Page</h1>

    <!-- Random Recipes -->
    <RecipePreviewList title="Random Recipes" class="RandomRecipes center" />

    <router-link v-if="!isLoggedIn" to="/login" tag="button">
      You need to log in to view this
    </router-link>

    <!-- Last Reviewed Recipes (only for logged-in users) -->
    <div v-if="isLoggedIn">
      <RecipePreviewList 
        title="Last Reviewed Recipes" 
        :lastReviewedRecipes="lastReviewedRecipes" 
        class="RandomRecipes center" 
      />
    </div>

    <div style="position: absolute; top: 70%; left: 50%; transform: translate(-50%, -50%);"></div> 
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";

export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      lastReviewedRecipes: [] // Fetch the last reviewed recipes for logged-in users
    };
  },
  computed: {
    isLoggedIn() {
      return !!this.$root.store.username; // Checks if the user is logged in
    }
  },
  mounted() {
    if (this.isLoggedIn) {
      // Fetch last reviewed recipes for the logged-in user here
      this.lastReviewedRecipes = this.$root.store.lastReviewedRecipes || []; 
    }
  }
};
</script>
