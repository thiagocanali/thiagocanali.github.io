<template>
  <header>
    <h1 class="logo">
      <router-link to="/">Thiago Canali</router-link>
    </h1>

    <nav>
      <router-link to="/" exact-active-class="active">Projetos</router-link>
      <router-link to="/about" exact-active-class="active">Sobre</router-link>
      <router-link to="/experience" exact-active-class="active">Experiência</router-link>
      <router-link to="/contact" exact-active-class="active">Contato</router-link>
    </nav>

    <div class="actions">
      <button @click="toggle">
        {{ darkMode ? '🌞' : '🌙' }}
      </button>

      <a href="https://github.com/thiagocanali" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/thiagocanali/" target="_blank">LinkedIn</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDarkMode } from '../composables/useDarkMode'

const { darkMode, toggle } = useDarkMode()
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: var(--card-bg);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo a {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
}

nav {
  display: flex;
  gap: 1.2rem;
}

nav a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.3s;
}

nav a:hover {
  color: var(--primary-color);
}

nav a.active {
  color: var(--primary-color);
  font-weight: 600;
}

.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.actions button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
}

.actions a {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text);
}

.actions a:hover {
  color: var(--primary-color);
}
</style>
