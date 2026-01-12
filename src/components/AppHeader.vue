<template>
  <header>
    <h1>Thiago Canali</h1>
    <div class="header-actions">
      <button @click="toggle">
        <span v-if="darkMode">🌞 Light</span>
        <span v-else>🌙 Dark</span>
      </button>
      <a href="https://github.com/thiagocanali" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/thiagocanali/" target="_blank">LinkedIn</a>
      <a href="/resume.pdf" target="_blank">CV</a>
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
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--card-bg);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 10;
  border-radius: 0 0 12px 12px;
}

h1 {
  font-size: 1.5rem;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-actions button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 0.9rem;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  transition: background 0.3s;
}
.header-actions button:hover {
  background: var(--tag-bg);
}

.header-actions a {
  font-size: 0.9rem;
  color: var(--text);
  font-weight: 500;
  transition: color 0.3s;
}
.header-actions a:hover {
  color: var(--primary-color);
}
</style>
