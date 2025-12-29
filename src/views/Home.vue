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

    <p class="suggestion">
      💬 <a href="https://forms.gle/yvVVwyz8YSM4xRGm9" target="_blank" rel="noopener">Deixe uma sugestão de melhoria</a>
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectModal from '../components/ProjectModal.vue'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'

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
  padding: 2rem;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.suggestion {
  margin-top: 2rem;
  font-weight: 500;
}

.suggestion a {
  color: var(--primary);
  text-decoration: underline;
  transition: color 0.2s;
}
.suggestion a:hover {
  color: var(--primary-hover);
}
</style>
