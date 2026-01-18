<template>
  <footer>
    <div class="status-bar">
      <span class="pulse"></span>
      <span class="status-text">All systems operational - 24x7 Monitor</span>
    </div>
    <p>© {{ new Date().getFullYear() }} Thiago Canali</p>
    <div class="links">
      <a href="https://github.com/thiagocanali" target="_blank">GitHub</a>
      <a href="https://linkedin.com/in/thiagocanali" target="_blank">LinkedIn</a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 2rem;
  text-align: center;
  border-top: 1px solid var(--border);
  margin-top: 4rem;
}

.status-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: var(--status-green);
  font-weight: 600;
}

.pulse {
  width: 8px;
  height: 8px;
  background: var(--status-green);
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(16, 185, 129, 0.4);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.links {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.links a {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-decoration: none;
}
</style>