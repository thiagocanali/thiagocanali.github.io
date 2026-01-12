<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-content">
      <header :style="{ backgroundColor: project.color }">
        <h2>{{ project.title }}</h2>
        <button @click="$emit('close')">✕</button>
      </header>
      <main>
        <p>{{ project.description }}</p>
        <ul v-if="project.techs.length">
          <li v-for="tech in project.techs" :key="tech">{{ tech }}</li>
        </ul>
        <div class="links">
          <a :href="project.githubUrl" target="_blank">GitHub</a>
          <a :href="project.link" target="_blank">Ver projeto</a>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GithubProject } from '../composables/useGithubProjects'

defineProps<{ project: GithubProject }>()
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  overflow: hidden;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 1rem;
}
header button {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
}
main {
  padding: 1rem;
}
.links {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
.links a {
  color: #42b883;
  text-decoration: none;
  font-weight: 600;
}
.links a:hover {
  text-decoration: underline;
}
</style>
