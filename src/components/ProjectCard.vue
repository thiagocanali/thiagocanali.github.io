<template>
  <article class="project-card" @click="$emit('click')">
    <div class="card-top">
      <span v-if="project.pinned" class="pin">📌 Destaque</span>
      <h3>{{ project.title }}</h3>
      <span v-if="project.stars > 0" class="stars">
        ⭐ {{ project.stars }}
      </span>
    </div>

    <p class="description">{{ project.description }}</p>

    <div class="tags" v-if="project.techs.length">
      <span v-for="tech in project.techs" :key="tech" class="tag">
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
  </article>
</template>

<script setup lang="ts">
import type { GithubProject } from '../composables/useGithubProjects'

defineProps<{ project: GithubProject }>()
</script>

<style scoped>
.project-card {
  background-color: var(--card-bg);
  box-shadow: var(--shadow);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-hover);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stars {
  font-size: 0.8rem;
  background: var(--tag-bg);
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
}

.description {
  margin: 0.75rem 0;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.card-actions {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.pin {
  font-size: 0.7rem;
  color: var(--primary-color);
  font-weight: 600;
}

</style>
