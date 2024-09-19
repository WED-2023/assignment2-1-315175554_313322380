// Import Vue and VueRouter dependencies
import Vue from 'vue';
import Router from 'vue-router';
// import components

//import Home from './components/Home.vue';
//import About from './components/About.vue';
import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";
import AboutPage from './pages/AboutPage.vue';
import CreateRecipePage from './pages/CreateRecipePage.vue';
import FavoriteRecipePage from './pages/FavoriteRecipePage.vue';
import UserRecipesPage from './pages/UserRecipesPage.vue';
import FamilyRecipesPage from './pages/FamilyRecipesPage.vue';
// Tell Vue to use Vue Router
Vue.use(Router);


// Define routes

const routes = [
  {
    path: "/", //path to the function
    name: "main", // path name 
    component: Main, // path component--> the name we set before
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },

  {
  path: "/favorite",
  name: "FavoriteRecipe",
  component: FavoriteRecipePage,
},
{
path: "/userrecipes",
name: "userrecipes",
component: UserRecipesPage,
},
{
  path: "/familyrecipes",
  name: "family",
  component: FamilyRecipesPage,
  },
  {
    path: "   ",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/createrecipe",
    name: "CreateRecipePage",
    component: CreateRecipePage,
  },

];

export default routes;
