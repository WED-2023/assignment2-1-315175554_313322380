<template>
  <div class="recipe-preview">
    <router-link
      :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
      class="recipe-body"
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

    <!-- Add Favorite Button -->
    <b-button
      variant="success"
      class="mt-2"
      @click.stop="toggleFavorite"
    >
      {{ isFavorite(recipe.id) ? 'Unfavorite' : 'Add to Favorites' }}
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      favorited: false, // Local state to track favorite status
    };
  },
  methods: {
    handleClick() {
      this.$emit('viewed', this.recipe);
    },
    toggleFavorite() {
      this.favorited = !this.favorited;
      this.$emit('favorite', this.recipe.id); // Emit event to parent
    },
    isFavorite(recipeId) {
      // Logic to determine if the recipe is already favorited
      return this.favorited;
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

.recipe-body {
  width: 100%;
  height: 120px;
  position: relative;
  border-bottom: 1px solid #ddd;
}

.recipe-image {
  margin: auto;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  transition: opacity 0.3s ease;
}

.recipe-footer {
  width: 100%;
  padding: 10px;
  background-color: #f9f9f9;
  overflow: hidden;
}

.recipe-title {
  padding: 5px 0;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #3498db;
}

.recipe-overview {
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  font-size: 12px;
  color: #666;
}

.recipe-overview li {
  text-align: center;
}

.recipe-overview li:hover {
  color: #333;
}
</style>
