<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>

    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  background: #35495e;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

nav a {
  color: #42b883;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: bold;
}

nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>
