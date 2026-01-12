<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <button class="close-btn" @click="$emit('close')">✕</button>

      <h2 id="modal-title">{{ project.title }}</h2>
      <p class="description">{{ project.description }}</p>

      <div class="meta">
        <span v-if="project.stars > 0">⭐ {{ project.stars }} estrelas</span>
        <span>
          🕒 Atualizado em
          {{ new Date(project.updatedAt).toLocaleDateString('pt-BR') }}
        </span>
      </div>

      <div class="tags" v-if="project.techs.length">
        <span v-for="tech in project.techs" :key="tech" class="tag">
          {{ tech }}
        </span>
      </div>

      <div class="actions">
        <a
          class="btn btn-github"
          :href="project.githubUrl"
          target="_blank"
        >
          GitHub
        </a>
        <a
          class="btn btn-project"
          :href="project.link"
          target="_blank"
        >
          Ver projeto
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GithubProject } from '../composables/useGithubProjects'

defineProps<{ project: GithubProject }>()
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background-color: var(--card-bg);
  border-radius: 14px;
  padding: 2rem;
  width: 90%;
  max-width: 520px;
  animation: fadeIn 0.3s ease;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 14px;
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
}

.description {
  margin: 1rem 0;
}

.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}
</style>
