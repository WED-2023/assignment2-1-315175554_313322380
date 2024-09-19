<template>
  <div class="container text-center">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <router-link to="/" exact class="btn btn-primary">
      Go Back to Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage"
};
</script>

<style scoped>
.container {
  padding: 100px;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

h1 {
  font-size: 3em;
  color: #e74c3c;
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.btn {
  font-size: 1em;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.btn:hover {
  background-color: #2980b9;
}
</style>
