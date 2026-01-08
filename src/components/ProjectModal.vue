<template>
  <div class="modal-backdrop" v-if="show" @click.self="$emit('close')">
    <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button class="modal-close" @click="$emit('close')" aria-label="Fechar modal">×</button>
      <h2 id="modal-title">{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div class="techs">
        <span
          v-for="tech in project.techs"
          :key="tech"
          class="tag"
          :style="{ backgroundColor: project.color }"
          >{{ tech }}</span
        >
      </div>
      <a :href="project.link" target="_blank" rel="noopener noreferrer">Abrir projeto</a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
  project: {
    title: string
    description: string
    techs: string[]
    link: string
    color: string
  }
}>()
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: relative;
}

.modal-close {
  position: absolute;
  top: 0.3rem;
  right: 0.5rem;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #555;
}

.techs {
  margin: 1rem 0;
}

.tag {
  display: inline-block;
  padding: 0.3rem 0.6rem;
  margin-right: 0.3rem;
  border-radius: 12px;
  font-size: 0.85rem;
  color: white;
}

a {
  font-weight: 600;
  color: var(--primary, #42b883);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
