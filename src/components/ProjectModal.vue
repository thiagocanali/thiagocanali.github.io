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
const props = defineProps<{ show: boolean, project: Project }>()
const emit = defineEmits<{ (e: 'close'): void }>()
const close = () => emit('close')
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  backdrop-filter: blur(2px);
}
.modal {
  background: var(--surface);
  padding: 2rem 2.5rem;
  border-radius: 18px;
  max-width: 550px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  animation: fadeIn 0.3s ease forwards;
  color: var(--text);
}
.close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.35rem;
  cursor: pointer;
  color: var(--muted);
  transition: color 0.2s;
}
.close:hover {
  color: var(--primary);
}
.techs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  justify-content: center;
  margin-top: 1rem;
}
.techs li {
  font-size: 0.78rem;
  background: var(--primary);
  color: #000;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  font-weight: 600;
}
.links a {
  display: inline-block;
  margin-top: 1.2rem;
  padding: 0.55rem 1.2rem;
  border-radius: 10px;
  background: var(--primary-hover);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s;
}
.links a:hover {
  transform: scale(1.05);
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
