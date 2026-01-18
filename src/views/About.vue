<template>
  <section class="about-page">
    <div class="about-container">
      <div class="profile-header">
        <h1>Sobre Mim</h1>
        <p class="tagline">Dev Fullstack & Especialista em Observabilidade (NOC)</p>
      </div>

      <div class="content-grid">
        <div class="bio-section">
          <p>
            Natural de Curitiba/PR e hoje radicado em Blumenau/SC, sou um profissional de TI que acredita que 
            <strong>desenvolvimento e operação devem caminhar juntos</strong>.
          </p>
          <p>
            Iniciei minha jornada no suporte técnico e manutenção, evoluindo para o desenvolvimento de soluções 
            web e mobile na <strong>Mobilibus (BUS2)</strong>, onde impactei dezenas de municípios com o app 
            BluMob. Essa experiência me deu uma base forte em Angular e Vue.js, Flutter e metodologias ágeis.
          </p>
          <p>
            Hoje, na Multitask, atuo na linha de frente do monitoramento 24x7, utilizando ferramentas como 
            <strong>Zabbix, Grafana e Dynatrace</strong>. Meu diferencial é unir esses dois mundos: 
            estou explorando automação e visualização de dados avançada, criando dashboards customizados 
            com o plugin HTML Graphs do Grafana para transformar dados brutos em inteligência operacional.
          </p>
          
          <div class="skills-block">
            <h3>Tech Stack & Ferramentas</h3>
            <div class="tags">
              <span class="tag">Vue.js / Angular</span>
              <span class="tag">Node.js / Python</span>
              <span class="tag">Flutter / Dart</span>
              <span class="tag">Zabbix / Grafana</span>
              <span class="tag">Dynatrace / PRTG</span>
              <span class="tag">MySQL / Firebase</span>
              <span class="tag">Linux / Active Directory</span>
              <span class="tag">Microsoft 365 Admin</span>
            </div>
          </div>
        </div>

        <div class="terminal-sidebar">
          <div class="terminal">
            <div class="terminal-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <div class="terminal-body">
              <p><span class="prompt">➜</span> <span>origin</span></p>
              <p class="res">Curitiba, PR (1998)</p>
              <p><span class="prompt">➜</span> <span>location</span></p>
              <p class="res">Blumenau, SC</p>
              <p><span class="prompt">➜</span> <span>focus</span></p>
              <p class="res">['Fullstack', 'Observability', 'DevOps']</p>
              <p><span class="prompt">➜</span> <span>status</span></p>
              <p class="res">Building the future of monitoring...</p>
              <p><span class="prompt">➜</span> <span class="blink">_</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-page { padding: 2rem 0; animation: fadeIn 0.5s ease; }
.about-container { max-width: 1000px; margin: 0 auto; }
.profile-header { margin-bottom: 2rem; text-align: left; }
.tagline { color: var(--primary-color); font-weight: 600; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px; }

.content-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: start; }
@media (min-width: 768px) { .content-grid { grid-template-columns: 1.6fr 1fr; } }

p { font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.2rem; color: var(--text-muted); }
h3 { margin-bottom: 1rem; font-size: 1.2rem; border-left: 4px solid var(--primary-color); padding-left: 10px; }

.terminal { background: #1a1b26; border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-hover); border: 1px solid #333; }
.terminal-header { background: #24283b; padding: 12px; display: flex; gap: 8px; }
.dot { width: 12px; height: 12px; border-radius: 50%; }
.red { background: #f7768e; } .yellow { background: #e0af68; } .green { background: #9ece6a; }
.terminal-body { padding: 20px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 0.85rem; color: #a9b1d6; }
.prompt { color: #73daca; }
.res { color: #cfc9c2; margin-bottom: 12px; padding-left: 15px; }
.blink { animation: blink 1s infinite; color: #7aa2f7; }
@keyframes blink { 50% { opacity: 0; } }
</style>