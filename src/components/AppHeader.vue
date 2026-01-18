<template>
  <header>
    <div class="header-container">
      <h1 class="logo">
        <router-link to="/">TCS<span>.</span></router-link>
      </h1>

      <nav class="desktop-nav">
        <router-link to="/">Projetos</router-link>
        <router-link to="/about">Sobre</router-link>
        <router-link to="/experience">Experiência</router-link>
      </nav>

      <div class="actions">
        <button @click="toggle" class="theme-btn">
          {{ darkMode ? '🌞' : '🌙' }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDarkMode } from '../composables/useDarkMode'
const { darkMode, toggle } = useDarkMode()
</script>

<style scoped>
header {
  background: var(--card-bg);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0.75rem 1rem;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text);
  text-decoration: none;
}

.logo span { color: var(--primary-color); }

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
}

nav a.router-link-active {
  color: var(--primary-color);
}

@media (max-width: 640px) {
  nav { gap: 0.5rem; }
  nav a { font-size: 0.8rem; }
}

.theme-btn {
  background: none;
  border: 1px solid var(--border);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;
}
</style>