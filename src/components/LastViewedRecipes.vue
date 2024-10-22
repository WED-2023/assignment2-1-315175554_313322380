<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
    @click="handleClick"
  >
    <div class="recipe-body">
      <img :src="recipe.image" alt="Recipe image" class="recipe-image" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.aggregateLikes || 0 }} likes</li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      const lastViewedRecipes = JSON.parse(localStorage.getItem('lastViewedRecipes')) || [];
      // Ensure the recipe is not duplicated and limit to last 5 viewed recipes
      if (!lastViewedRecipes.some(r => r.id === this.recipe.id)) {
        lastViewedRecipes.unshift(this.recipe);
        if (lastViewedRecipes.length > 5) {
          lastViewedRecipes.pop();
        }
      }
      localStorage.setItem('lastViewedRecipes', JSON.stringify(lastViewedRecipes));
      this.$emit('viewed', this.recipe); // Emit viewed event
    }
  }
};
</script>

<style scoped>
.recipe-preview {
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 10px auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
}
.recipe-preview:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.recipe-preview .recipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.recipe-title {
  padding: 5px 0;
  font-weight: bold;
  color: #3498db;
}
</style>
