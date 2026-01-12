<template>
  <div class="skeleton">
    <div class="header"></div>
    <div class="body"></div>
    <div class="footer"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.skeleton {
  background: #f0f0f0;
  border-radius: 8px;
  padding: 1rem;
  animation: pulse 1.5s infinite;
}
.skeleton .header {
  height: 1.2rem;
  width: 60%;
  background: #ddd;
  border-radius: 4px;
}
.skeleton .body {
  height: 0.8rem;
  margin: 0.5rem 0;
  background: #ddd;
  border-radius: 4px;
}
.skeleton .footer {
  height: 1rem;
  width: 40%;
  background: #ddd;
  border-radius: 4px;
}
@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
}
</style>
