<template>
  <AppHeader />

  <main class="app-content">
    <router-view />
  </main>

  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style scoped>
.app-content {
  min-height: calc(100vh - 160px);
}
</style>
