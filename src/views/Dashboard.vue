<template>
  <section class="dashboard">
    <h2>⚡ Projetos em destaque</h2>
    <p>Projetos publicados automaticamente via GitHub Pages</p>

    <div class="grid">
      <!-- Skeleton Loader -->
      <ProjectSkeleton
        v-if="loading"
        v-for="n in 6"
        :key="n"
      />

      <!-- Cards -->
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @click="openModal(project)"
      />
    </div>

    <p v-if="error" class="error">
      ⚠️ Não foi possível carregar os projetos agora.
    </p>

    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectModal from '../components/ProjectModal.vue'
import ProjectSkeleton from '../components/ProjectSkeleton.vue'
import { useGithubProjects, type GithubProject } from '../composables/useGithubProjects'

// Busca projetos do GitHub
const { projects, loading, error } = useGithubProjects('thiagocanali')

// Modal
const selectedProject = ref<GithubProject | null>(null)

function openModal(project: GithubProject) {
  selectedProject.value = project
}

function closeModal() {
  selectedProject.value = null
}
</script>

<style scoped>
.dashboard {
  padding: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.error {
  color: var(--error-color);
  margin-top: 1rem;
}
</style>
