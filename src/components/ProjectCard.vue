<template>
  <a class="card" @click="emit('click')" href="javascript:void(0)">
    <div class="hero" :style="heroStyle">
      <h3>{{ project.title }}</h3>
    </div>
    <div class="content">
      <p>{{ project.description }}</p>
      <ul class="techs">
        <li v-for="tech in project.techs" :key="tech">{{ tech }}</li>
      </ul>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Project } from '../data/projects'

const props = defineProps<{ project: Project }>()
const emit = defineEmits<{ (e: 'click'): void }>()

const heroStyle = {
  background: `linear-gradient(135deg, ${props.project.color ?? '#42b883'}88, #0f172a88)`,
  transition: 'background 0.3s ease'
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  text-decoration: none;
  color: inherit;
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
  cursor: pointer;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.45);
  filter: brightness(1.05);
}
.hero {
  padding: 2rem 1.5rem;
  display: flex;
  align-items: flex-end;
  min-height: 140px;
  border-bottom: 1px solid var(--border);
}
.hero h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 6px rgba(0,0,0,0.4);
}
.content {
  padding: 1.4rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.content p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--muted);
}
.techs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin-top: 0.5rem;
}
.techs li {
  font-size: 0.75rem;
  background: rgba(66,184,131,0.15);
  color: var(--primary);
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  font-weight: 500;
}
</style>
