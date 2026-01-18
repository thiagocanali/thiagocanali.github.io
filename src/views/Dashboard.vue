<template>
  <section class="dashboard">
    <div class="intro">
      <h2>⚡ Projetos</h2>
      <p>Uma coleção de projetos para estudar, testar e evoluir como desenvolvedor.</p>
      <p>
        Para acessar um projeto, clique em <strong>"Ver projeto"</strong>.
        Você será redirecionado para a página publicada no GitHub Pages.
      </p>
    </div>

    <div class="controls">
      <input v-model="search" placeholder="Filtrar projetos..." class="search-input" />
      <select v-model="tech" class="tech-select">
        <option value="">Todas as Stacks</option>
        <option v-for="t in techs" :key="t" :value="t">{{ t }}</option>
      </select>
    </div>

    <div class="grid">
      <ProjectSkeleton v-if="loading" v-for="n in 6" :key="n" />
      <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project"
        @click="openModal(project)" />
    </div>

    <ProjectModal v-if="selectedProject" :project="selectedProject" @close="closeModal" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectModal from '../components/ProjectModal.vue'
import ProjectSkeleton from '../components/ProjectSkeleton.vue'
import { useGithubProjects, type GithubProject } from '../composables/useGithubProjects'

const { projects, loading } = useGithubProjects('thiagocanali')
const search = ref('')
const tech = ref('')

const techs = computed(() => [...new Set(projects.value.flatMap(p => p.techs))])

const filteredProjects = computed(() =>
  projects.value
    .filter(p => p.title.toLowerCase().includes(search.value.toLowerCase()))
    .filter(p => !tech.value || p.techs.includes(tech.value))
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0))
)

const selectedProject = ref<GithubProject | null>(null)
const openModal = (p: GithubProject) => selectedProject.value = p
const closeModal = () => selectedProject.value = null
</script>

<style scoped>
.intro {
  margin-bottom: 2rem;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.search-input,
.tech-select {
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--card-bg);
  color: var(--text);
  width: 100%;
}

@media (min-width: 640px) {
  .controls {
    flex-direction: row;
  }

  .search-input {
    flex: 2;
  }

  .tech-select {
    flex: 1;
  }
}
</style>