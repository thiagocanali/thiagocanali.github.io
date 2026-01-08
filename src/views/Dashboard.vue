<template>
  <section class="dashboard">
    <h1>Projetos</h1>

    <p v-if="loading">Carregando projetos...</p>
    <p v-if="error">{{ error }}</p>

    <div class="grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGithubProjects } from '../composables/useGithubProjects'
import ProjectCard from '../components/ProjectCard.vue'

const { projects, loading, error } = useGithubProjects('thiagocanali')
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
</style>
