<template>
  <section class="dashboard">
    <h2>⚡ Projetos em destaque</h2>
    <p>Alguns projetos públicos disponíveis no GitHub Pages</p>

    <div class="grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
        @click="openModal(project)"
      />
    </div>

    <ProjectModal
      v-if="selectedProject"
      :show="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />

    <div class="suggestion">
      💬 <a href="https://forms.gle/yvVVwyz8YSM4xRGm9" target="_blank">Deixe uma sugestão de melhoria</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectModal from '../components/ProjectModal.vue'
import type { Project } from '../data/projects'
import { projects } from '../data/projects'

const isModalOpen = ref(false)
const selectedProject = ref<Project | null>(null)

const openModal = (project: Project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>

<style scoped>
.dashboard {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
}

.dashboard h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 0.25rem;
  font-weight: 700;
  display: inline-block;
}

.dashboard h2 + p {
  margin-bottom: 2rem;
  color: var(--muted);
  font-size: 0.95rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.suggestion {
  margin-top: 1.5rem;
}

.suggestion a {
  font-weight: 500;
  color: var(--primary);
  text-decoration: underline;
}

.suggestion a:hover {
  color: var(--primary-hover);
}
</style>
