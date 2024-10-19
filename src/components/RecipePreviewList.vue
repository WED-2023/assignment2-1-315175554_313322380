<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>

    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>

    <!-- Refresh button to get new random recipes -->
    <b-button @click="updateRecipes" variant="primary" class="mb-3">Refresh Recipes</b-button>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    amountToShow: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      recipes: [] // array of recipes
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        // Make the API request to fetch random recipes
        const response = await this.axios.get(
          'http://localhost:3000/recipes/recipe/random',
          {
            params: {
              number: this.amountToShow // Request 'amountToShow' random recipes
            }
          }
        );

        // Assign the fetched recipes to the local array
        this.recipes = response.data.recipes;
        console.log(this.recipes); // Log the recipes to verify the updated list
      } catch (error) {
        console.error("Error fetching random recipes:", error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100px;
}
</style>
