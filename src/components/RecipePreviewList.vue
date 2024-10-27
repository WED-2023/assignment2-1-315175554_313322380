<template>
  <b-container>
    <h3>{{ title }}<slot></slot></h3>
    <b-row>
      <b-col v-for="r in displayedRecipes" :key="r.id" cols="12" md="6" lg="4">
        <RecipePreview
          :recipe="r"
          @favorite-deleted="handleFavoriteDeleted(r.id)" 
        />
      </b-col>
    </b-row>
    <b-button v-if="!lastReviewedRecipes" @click="updateRecipes" variant="primary" class="mb-3">Refresh Recipes</b-button>
    <b-alert v-if="errorMessage" variant="danger">{{ errorMessage }}</b-alert>
    <b-spinner v-if="loading" label="Loading..."></b-spinner>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
import axios from 'axios';

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: String,
    lastReviewedRecipes: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      randomRecipes: [],
      loading: false,
      errorMessage: ''
    };
  },
  computed: {
    displayedRecipes() {
      return this.lastReviewedRecipes || this.randomRecipes;
    }
  },
  mounted() {
    if (!this.lastReviewedRecipes) {
      this.updateRecipes();
    }
  },
  methods: {
    async updateRecipes() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3000/recipes/recipe/random', {
          params: { number: 3 }
        });
        this.randomRecipes = response.data;
      } catch (error) {
        console.error('Error fetching random recipes:', error);
        this.errorMessage = "Error fetching random recipes.";
      } finally {
        this.loading = false;
      }
    },
    handleFavoriteDeleted(recipeId) {
      this.$emit('favorite-deleted', recipeId); // Emit up to handle in parent component
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
