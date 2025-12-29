<template>
  <div v-if="show" class="overlay" @click.self="close">
    <div class="modal">
      <button class="close" @click="close">✕</button>

      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>

      <ul class="techs">
        <li v-for="tech in project.techs" :key="tech">{{ tech }}</li>
      </ul>

      <div class="links">
        <a :href="project.link" target="_blank" rel="noopener">Ver Projeto</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '../data/projects'

const props = defineProps<{
  show: boolean
  project: Project
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => emit('close')
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal {
  background: #1a1a1a; /* cor de fundo do modal */
  padding: 1.8rem 2rem;
  border-radius: 16px;
  max-width: 500px;
  width: 90%;
  position: relative;
  text-align: center;
  animation: fadeIn 0.25s ease;
  color: #fff;
}

.close {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: #fff;
}

.techs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  justify-content: center;
  margin-top: 0.8rem;
}

.techs li {
  font-size: 0.75rem;
  background: #42b883; /* cor dos badges */
  color: #000;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
}

.links a {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1.1rem;
  border-radius: 8px;
  background: #42b883; /* mesma cor dos badges */
  color: #000;
  text-decoration: none;
  font-weight: 500;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
