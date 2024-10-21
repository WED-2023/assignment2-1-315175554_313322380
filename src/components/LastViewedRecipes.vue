<template>
  <div class="recipe-preview-list">
    <h2>{{ title }}</h2>
    
    <div v-if="recipes.length > 0" class="recipe-grid">
      <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
        <img :src="recipe.image" alt="Recipe Image" class="recipe-img" />
        <div class="recipe-info">
          <h3>{{ recipe.name }}</h3>
          <p>{{ recipe.description }}</p>
        </div>
      </div>
    </div>

    <div v-else>
      <p>No recipes to display.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    recipes: {
      type: Array,
      default: () => [] // Default to an empty array
    }
  }
};
</script>

<style scoped>
.recipe-preview-list {
  margin: 20px 0;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.recipe-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
}

.recipe-img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}

.recipe-info h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}
</style>
