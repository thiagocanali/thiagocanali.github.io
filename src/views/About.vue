<template>
  <section class="about container">
    <header class="about-header">
      <h1>Sobre mim</h1>
      <p class="subtitle">
        Desenvolvedor Fullstack focado em aplicações web modernas,
        escaláveis e bem estruturadas.
      </p>
    </header>

    <div class="about-grid">
      <div class="about-text">
        <p>
          Sou <strong>Thiago Canali</strong>, desenvolvedor
          <strong>Fullstack</strong> com experiência em
          <strong>Vue.js</strong>, <strong>TypeScript</strong>,
          <strong>Node.js</strong> e automação.
        </p>

        <p>
          Atuo no desenvolvimento de dashboards, sistemas web interativos
          e aplicações responsivas, sempre buscando código limpo,
          reutilizável e de fácil manutenção.
        </p>

        <p>
          Meus projetos estão disponíveis no
          <a href="https://github.com/thiagocanali" target="_blank">GitHub</a>
          e também compartilho conteúdo e experiências no
          <a href="https://www.linkedin.com/in/thiagocanali/" target="_blank">
            LinkedIn
          </a>.
        </p>
      </div>

      <aside class="about-skills">
        <h3>🛠️ Tecnologias</h3>
        <ul class="skills">
          <li>Vue.js</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Vite</li>
          <li>HTML & CSS</li>
          <li>APIs REST</li>
          <li>Git & GitHub</li>
          <li>GitHub Pages</li>
        </ul>
      </aside>

    </div>
    <div class="cv">
      <a href="https://www.linkedin.com/in/thiagocanali/" target="_blank">
        📄 Ver currículo no LinkedIn
      </a>
    </div>

  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about {
  padding: 2.5rem 1rem;
}

.about-header {
  text-align: center;
  margin-bottom: 2.8rem;
}

.subtitle {
  max-width: 720px;
  margin: 0 auto;
  color: var(--muted);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
}

.about-text p {
  font-size: 0.95rem;
  line-height: 1.75;
}

.about-skills {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.6rem;
}

.skills {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skills li {
  font-size: 0.75rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(66, 184, 131, 0.15);
  color: var(--primary);
  font-weight: 600;
}

.cv {
  margin-top: 2.5rem;
  text-align: center;
}

.cv a {
  display: inline-block;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  background: var(--primary);
  color: #000;
  font-weight: 700;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
