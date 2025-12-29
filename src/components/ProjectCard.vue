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
import { computed } from 'vue'

const props = defineProps<{ project: Project }>()
const emit = defineEmits<{ (e: 'click'): void }>()

const heroStyle = computed(() => ({
  background: `linear-gradient(
    135deg,
    ${props.project.color ?? '#42b883'}cc,
    #0f172acc
  )`
}))
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--border);
  text-decoration: none;
  color: inherit;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.35);
}

.hero {
  padding: 1.8rem 1.4rem;
  display: flex;
  align-items: flex-end;
  min-height: 120px;
}

.hero h3 {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
  color: #fff;
}

.content {
  padding: 1.2rem 1.4rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.content p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--muted);
}

.techs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  list-style: none;
  padding: 0;
  margin: 0.4rem 0 0;
}

.techs li {
  font-size: 0.72rem;
  background: rgba(255, 255, 255, 0.08);
  color: var(--text);
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
}
</style>
