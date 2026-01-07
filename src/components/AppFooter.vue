<template>
  <footer class="footer">
    <p>
      © {{ new Date().getFullYear() }} — Thiago Canali
    </p>

    <div class="links">
      <a
        href="https://github.com/thiagocanali"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/thiagocanali/"
        target="_blank"
        rel="noopener"
      >
        LinkedIn
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--muted);
}

.links {
  display: flex;
  gap: 1rem;
}

@media (max-width: 640px) {
  .footer {
    flex-direction: column;
    gap: 0.8rem;
  }
}
</style>
