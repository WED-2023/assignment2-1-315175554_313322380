<template>

  <div>
  <button @click="toggleFavorite" class="btn" :class="{'btn-success': isFavorite}">
  <i class="material-icons">{{ isFavorite ? 'star' : 'star_border' }}</i>
  <span class="like-overlay"></span>
  </button>

  <span class="fav-text" v-if="!isFavorite">Add to your favorite</span>
  <span class="fav-text" v-else>Added to Favorites</span>
</div>
</template>

<script>
import axios from 'axios';
import { integer } from 'vuelidate/lib/validators';

export default {
  name: 'FavoriteButton',
  props: {
    recipeId: {
      type: integer,
      required: true
    },
    initiallyFavorited: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFavorite: this.initiallyFavorited
    };
  },
  methods: {
  async toggleFavorite() {
    if (!this.recipeId) {
      console.error("Recipe ID is undefined.");
      return;
    }
    try {
      if (this.isFavorite) {
        // Remove from favorites
        const response = await axios.delete(`http://localhost:3000/users/favorites`, {
          data: { user_id: this.user_id, recipe_id: this.recipeId },
          withCredentials: true,
        });
        console.log("Removed from favorites:", response.data);
        this.isFavorite = false;
        this.$emit('favorite-deleted', this.recipeId);
      } else {
        // Add to favorites
        const response = await axios.post('http://localhost:3000/users/favorites', 
          { user_id: this.user_id, recipe_id: this.recipeId },
          { withCredentials: true }
        );
        console.log("Added to favorites:", response.data);
        this.isFavorite = true;
        this.$emit('favorite-added', this.recipeId);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  }
}
,
  created() {
    this.loadFavoriteStatus();
  }
};
</script>

<style scoped>


.btn {
position: relative;
width: 50px;
height: 50px;
border-radius: 50%;
background: #ccc;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
cursor: pointer;
overflow: hidden;

}

.btn-success {
background-color: #488648; /* A more neutral success color */
color: white;
}


.fav-text{
text-align: center; /* Center the text below the button */
color: #666; /* Optional: set text color */
padding-left: 20px;
}


.like-overlay {
display: block;
position: absolute;
top: 0;
left: 0;
width: 50px;
height: 50px;
border-radius: 50%;
background: #ff4f8f;
transform: scale(0);
transition: transform .4s;
z-index: 0;
}
</style>
