<template>
  <footer>
    <p>© {{ new Date().getFullYear() }} Thiago Canali. Todos os direitos reservados.</p>
    <div class="footer-links">
      <a href="https://github.com/thiagocanali" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/thiagocanali/" target="_blank">LinkedIn</a>
      <a href="/resume.pdf" target="_blank">CV</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
footer {
  text-align: center;
  padding: 1.5rem 2rem;
  background-color: var(--card-bg);
  box-shadow: var(--shadow);
  margin-top: 3rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  border-radius: 12px 12px 0 0;
}

.footer-links {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.footer-links a {
  font-size: 0.85rem;
  color: var(--text);
  font-weight: 500;
  transition: color 0.3s;
}
.footer-links a:hover {
  color: var(--primary-color);
}
</style>
