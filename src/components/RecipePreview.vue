<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
  >
    <div class="recipe-body">
      <img  :src="recipe.image" class="recipe-image" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.aggregateLikes }} likes</li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {

 data() {
    return {
    //  image_load: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }

    // id: {
    //   type: Number,
    //   required: true
    // },
    // title: {
    //   type: String,
    //   required: true
    // },
    // readyInMinutes: {
    //   type: Number,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // aggregateLikes: {
    //   type: Number,
    //   required: false,
    //   default() {
    //     return undefined;
    //   }
    // }
  }
};
</script>
<style scoped>
.recipe-preview {
  display: block;
  width: 100%; /* Ensures the card takes full width in its container */
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

.recipe-preview > .recipe-body {
  width: 100%;
  height: 120px; /* Smaller height for the photo */
  position: relative;
  border-bottom: 1px solid #ddd;
}

.recipe-preview .recipe-body .recipe-image {
  margin: auto;
  display: block;
  width: 100%; /* Full width */
  height: 100%; /* Adjust height to fit the smaller container */
  object-fit: cover; /* Ensures the image scales properly */
  border-radius: 8px 8px 0 0;
  transition: opacity 0.3s ease;
}

.recipe-preview .recipe-footer {
  width: 100%;
  padding: 10px; /* Reduced padding for a more compact look */
  background-color: #f9f9f9;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 5px 0;
  width: 100%;
  font-size: 14px; /* Smaller font size */
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #3498db;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 0;
  display: flex;
  justify-content: space-between; /* Space between time and likes */
  list-style: none;
  margin: 0;
  font-size: 12px; /* Smaller font size */
  color: #666;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  text-align: center;
  color: #666;
}

.recipe-preview .recipe-footer ul.recipe-overview li:hover {
  color: #333;
}
</style>
