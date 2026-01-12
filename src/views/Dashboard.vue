<template>
  <section class="dashboard">
    <h2>⚡ Projetos</h2>
    <p>Busque, filtre e explore meus projetos</p>

    <!-- CONTROLES -->
    <div class="controls">
      <input
        v-model="search"
        placeholder="Buscar projeto..."
      />

      <select v-model="tech">
        <option value="">Todas tecnologias</option>
        <option v-for="t in techs" :key="t" :value="t">
          {{ t }}
        </option>
      </select>
    </div>

    <div class="grid">
      <ProjectSkeleton v-if="loading" v-for="n in 6" :key="n" />

      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
        @click="openModal(project)"
      />
    </div>

    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectModal from '../components/ProjectModal.vue'
import ProjectSkeleton from '../components/ProjectSkeleton.vue'
import { useGithubProjects, type GithubProject } from '../composables/useGithubProjects'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Thiago Canali | Projetos',
  description: 'Portfólio com projetos em Vue, TypeScript e aplicações web modernas'
})

const { projects, loading } = useGithubProjects('thiagocanali')

const search = ref('')
const tech = ref('')

const techs = computed(() =>
  [...new Set(projects.value.flatMap(p => p.techs))]
)

const filteredProjects = computed(() =>
  projects.value
    .filter(p =>
      p.title.toLowerCase().includes(search.value.toLowerCase())
    )
    .filter(p => !tech.value || p.techs.includes(tech.value))
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1
      if (!a.pinned && b.pinned) return 1
      return b.stars - a.stars
    })
)

const selectedProject = ref<GithubProject | null>(null)

function openModal(project: GithubProject) {
  selectedProject.value = project
}
function closeModal() {
  selectedProject.value = null
}
</script>

<style scoped>
.controls {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
}

.controls input,
.controls select {
  padding: 0.6rem;
  border-radius: 8px;
  border: 1px solid var(--tag-bg);
  background: var(--card-bg);
  color: var(--text);
}
</style>
