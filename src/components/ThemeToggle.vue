<template>
  <button class="toggle" @click="$emit('toggle')">
    {{ isDark ? '🌙' : '☀️' }}
  </button>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const isDark = ref(false)

watchEffect(() => {
  isDark.value = document.body.classList.contains('dark')
})
</script>

<style scoped>
.toggle {
  background: none;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.3rem 0.8rem;
  cursor: pointer;
  font-size: 1rem;
}
</style>
