<template>
  <article class="card">
    <header>
      <h3>{{ project.name }}</h3>
      <span v-if="project.language">{{ project.language }}</span>
    </header>

    <p class="description">
      {{ project.description || 'Sem descrição' }}
    </p>

    <footer>
      <a
        class="primary"
        :href="project.projectUrl"
        target="_blank"
        rel="noopener"
      >
        Ver projeto
      </a>

      <a
        :href="project.githubUrl"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </a>
    </footer>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    name: string
    description: string
    projectUrl: string
    githubUrl: string
    language: string
  }
}>()
</script>

<style scoped>
.card {
  background: #0f0f0f;
  border: 1px solid #222;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header span {
  font-size: 0.75rem;
  opacity: 0.7;
}

.description {
  opacity: 0.8;
}

footer {
  display: flex;
  gap: 1rem;
}

.primary {
  color: #000;
  background: #42b883;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  text-decoration: none;
}

footer a {
  color: #42b883;
  text-decoration: none;
}
</style>
