<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="{ name: 'main' }">🍴 My Recipes</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
          <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
        </b-navbar-nav>

        <!-- Guest section -->
        <b-navbar-nav class="ml-auto" v-if="!$root.store.username">
          <div class="d-flex align-items-center">
            <span class="guest-text">👋 Hello, Guest</span>
            <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
            <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
          </div>
        </b-navbar-nav>

        <!-- Logged-in user section -->
        <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item-dropdown right>
            <template #button-content>
              <span>👋 Hello {{$root.store.username}}</span>
            </template>
            <b-dropdown-item :to="{ name: 'FavoriteRecipe' }">My Favorite Recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'userrecipes' }">My Recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'family' }">My Family Recipes</b-dropdown-item>
          </b-nav-item-dropdown>

          <!-- Button to open the modal -->
          <b-nav-item @click="CreateNewRecipe">Create New Recipe</b-nav-item>
          <b-nav-item @click="Logout">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Modal for creating a new recipe - only shows when triggered -->
    <b-modal id="create-recipe-modal" title="Create New Recipe" hide-footer>
      <template #default>
        <p class="my-4">This is where your recipe creation form will go.</p>
        <b-button variant="primary" @click="saveRecipe">Save Recipe</b-button>
        <b-button variant="danger" @click="closeModal">Cancel</b-button>
      </template>
    </b-modal>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    // Method to show the modal when "Create New Recipe" is clicked
    CreateNewRecipe() {
      console.log('CreateNewRecipe triggered');
      this.$bvModal.show('create-recipe-modal');
    },

    // Method to handle closing the modal
    closeModal() {
      this.$bvModal.hide('create-recipe-modal');
    },

    // Method to handle saving the recipe (can be expanded as needed)
    saveRecipe() {
      // Add your save logic here
      console.log('Recipe saved');
      this.closeModal();
    },

    // Method to handle user logout
    Logout() {
      // Assuming you have a logout function defined in your global store
      this.$root.store.logout();
      // Display a toast notification for successful logout
      this.$root.toast("Logout", "User logged out successfully", "success");

      // Redirect to the home page after logout
      this.$router.push("/").catch(() => {
        this.$forceUpdate(); // Force update to handle routing errors gracefully
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";


#app {
  font-family: 'Merienda', cursive; /* Adding a playful font */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f9f3e6; /* Light beige for a recipe vibe */
}

b-navbar {
  background-color: #ffb347; /* Soft orange for a recipe theme */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for smoothness */
}

b-navbar-brand {
  font-size: 1.8em;
  font-weight: bold;
  color: #fff !important; /* Ensuring the brand name is legible */
  transition: color 0.3s ease;
}

b-navbar-brand:hover {
  color: #ffe5b4 !important; /* Lighter color on hover */
}

b-navbar-nav .b-nav-item {
  color: #fff !important; /* Nav links in white */
  font-size: 1.1em;
  transition: color 0.3s ease;
}

b-navbar-nav .b-nav-item:hover {
  color: #ffe5b4 !important; /* Light hover color */
}

.welcome-message {
  font-size: 1.2em;
  margin-left: 15px;
  color: #fff;
}

b-nav-item-dropdown .dropdown-menu {
  background-color: #ffb347; /* Matching dropdown with navbar */
}

b-dropdown-item {
  font-size: 1.1em;
  color: #fff !important;
  transition: background-color 0.3s ease;
}

b-dropdown-item:hover {
  background-color: #ffe5b4; /* Light hover effect */
}

#nav a.router-link-exact-active {
  color: #ff6f61 !important; /* Highlight active links with soft red */
}

#h1 {
  font-size: 21px;
  margin-left: 15px;
}

b-nav-item {
  font-size: 1.1em;
  transition: background-color 0.3s ease, color 0.3s ease;
  padding: 0.5rem 1rem;
}

b-nav-item:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Smooth hover effect */
}

b-nav-item:active {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>