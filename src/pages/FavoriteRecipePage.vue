<template>
  <div class="main-container">
    <br>
    <h1>My Favorites</h1>
    <div v-if="favoriteRecipes.length === 0">
      <p>No favorite recipes yet.</p>
    </div>
    <div v-else class="columns">
      <!-- Display favorite recipes using a grid layout -->
      <RecipePreviewList 
        class="RandomRecipes recipe-preview-list" 
        :recipes="favoriteRecipes"
        @favorite-deleted="removeFavorite"
      />
    </div>
  </div>
</template>
<script>
import RecipePreviewList from '../components/RecipePreviewList.vue';
import axios from 'axios';

export default {
  components: {
    RecipePreviewList,
  },
  data() {
    return {
      favoriteRecipes: [],
      user_id: localStorage.getItem('user_id') || '', // Ensure user_id is available
    };
  },
  created() {
    this.fetchFavoriteRecipes();
  },
  methods: {
    async fetchFavoriteRecipes() {
      if (!this.user_id) {
        console.error('User ID is not defined');
        return;
      }
      try {
        const response = await axios.get(`http://localhost:3000/users/favorites`, {
          params: { user_id: this.user_id },
          withCredentials: true,
        });
        
        if (response.data && Array.isArray(response.data)) {
          this.favoriteRecipes = response.data;
        } else {
          console.warn('Unexpected data format received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching favorite recipes:', error);
      }
    }
  }
};
</script>



<style scoped lang="scss">
.main-container {
  min-height: 100vh; /* Ensure full viewport height */
  width: 100%; /* Full width of the viewport */
  max-width: 1800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 60px 20px; /* Added padding to account for the header/navbar */
  color: #333;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4rem); /* Responsive title */
  text-align: center;
  color: #333; /* Text color */
  margin-bottom: 40px;
}

.columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Set exactly 3 columns */
  gap: 20px;
  max-width: 1200px; /* Set max width for centering */
  margin: 0 auto; /* Center the grid */
  padding: 20px;
}

.recipe-preview-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipe-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  padding: 20px; /* Increase padding for better legibility */
}

.recipe-card:hover {
  transform: scale(1.05); /* Slightly larger zoom on hover for better emphasis */
}

.recipe-card img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
}

.recipe-card-title {
  padding: 15px;
  height: auto;
  font-size: 1.75rem; /* Slightly larger title */
  text-align: center;
}

.recipe-card p {
  font-size: 1.2rem; /* Increase the font size for readability */
  margin: 10px 0;
  text-align: center;
}
</style>
