<template>
  <div class="project-card" @click="$emit('click')">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>

    <div class="tags" v-if="project.techs.length">
      <span
        v-for="tech in project.techs"
        :key="tech"
        class="tag"
      >
        {{ tech }}
      </span>
    </div>

    <div class="card-actions">
      <a
        class="btn btn-github"
        :href="project.githubUrl"
        target="_blank"
        @click.stop
      >
        GitHub
      </a>

      <a
        class="btn btn-project"
        :href="project.link"
        target="_blank"
        @click.stop
      >
        Ver projeto
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GithubProject } from '../composables/useGithubProjects'

defineProps<{
  project: GithubProject
}>()
</script>

<style scoped>
.card-actions {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}
</style>
