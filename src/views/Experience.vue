<template>
  <section class="experience">
    <div class="container">
      <header class="exp-header">
        <h1>Experiência Profissional</h1>
        <p>Uma trajetória construída entre o suporte, o desenvolvimento e a observabilidade.</p>
      </header>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot current"></div>
          <div class="timeline-content">
            <div class="header">
              <h3>Analista de Monitoramento de TI (NOC 24x7)</h3>
              <span class="date">Jul 2025 - Presente</span>
            </div>
            <p class="company">Multitask Consultoria</p>
            <ul class="tasks">
              <li>Monitoramento proativo com <strong>Zabbix, Grafana, Dynatrace e PRTG</strong>.</li>
              <li>Suporte técnico a infraestruturas Linux/Windows e redes corporativas.</li>
              <li>Monitoramento de sistemas críticos como ERP e SAP (Heinz, Bunge, Ailos).</li>
              <li>Criação de soluções customizadas com <strong>HTML Graphs no Grafana</strong>.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="header">
              <h3>Analista de Suporte de TI</h3>
              <span class="date">Abr 2025 - Jul 2025</span>
            </div>
            <p class="company">Tec+ Soluções Inteligentes</p>
            <ul class="tasks">
              <li>Gestão de ambiente <strong>Microsoft 365 e Active Directory</strong>.</li>
              <li>Resolução de incidentes de rede (DHCP, conectividade) e hardware.</li>
              <li>Gerenciamento de chamados via Movidesk e atendimento Digisac.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="header">
              <h3>Desenvolvedor Mobile & Web</h3>
              <span class="date">Jun 2021 - Fev 2023</span>
            </div>
            <p class="company">Mobilibus (BUS2)</p>
            <ul class="tasks">
              <li>Desenvolvimento da <strong>versão 3.5 do BluMob</strong> e customização de +40 apps.</li>
              <li>Criação de interfaces com Vue.js/Angular e mobile com <strong>Flutter/Dart</strong>.</li>
              <li>Integração com Firebase e ferramentas de mapas (Leaflet/Google Maps).</li>
              <li>Backend em Node.js com banco de dados MySQL e MongoDB.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="header">
              <h3>TI & Suporte Técnico</h3>
              <span class="date">2017 - 2020</span>
            </div>
            <p class="company">Exército Brasileiro (23º Batalhão de Infantaria)</p>
            <ul class="tasks">
              <li>Administração de servidores, intranet e site institucional.</li>
              <li>Implementação dos sistemas SISCOFIS e SIMATEX.</li>
              <li>Manutenção de hardware e redes de computadores.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="education-grid">
        <div class="edu-card">
          <h3>Educação</h3>
          <p><strong>Análise e Desenvolvimento de Sistemas</strong></p>
          <p>Formação em desenvolvimento de software com ênfase em aplicações web, banco de dados e projetos de sistemas.</p>
        </div>
        <div class="edu-card">
          <h3>Formação Complementar</h3>
          <p><strong>Entra21 - Blusoft</strong></p>
          <p>Curso intensivo de Programação (Conceito de Excelência).</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience { padding: 2rem 0; max-width: 900px; margin: 0 auto; }
.exp-header { margin-bottom: 3rem; }
.timeline { position: relative; border-left: 2px solid var(--border); margin-left: 10px; padding-left: 25px; }

.timeline-item { position: relative; margin-bottom: 2.5rem; }
.timeline-dot {
  position: absolute; left: -36px; top: 5px; width: 20px; height: 20px;
  background: var(--bg); border: 4px solid var(--primary-color); border-radius: 50%;
}
.timeline-dot.current { background: var(--primary-color); box-shadow: 0 0 12px var(--primary-color); }

.timeline-content {
  background: var(--card-bg); padding: 1.5rem; border-radius: 12px;
  box-shadow: var(--shadow); border: 1px solid var(--border);
}

.header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-bottom: 0.5rem; }
.date { font-size: 0.75rem; font-weight: 700; background: var(--tag-bg); padding: 4px 10px; border-radius: 20px; }
.company { font-weight: 700; color: var(--primary-color); margin-bottom: 1rem; font-size: 0.9rem; }

.tasks { list-style: none; }
.tasks li { font-size: 0.9rem; margin-bottom: 0.6rem; color: var(--text-muted); padding-left: 1.2rem; position: relative; }
.tasks li::before { content: "→"; position: absolute; left: 0; color: var(--primary-color); }

.education-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; margin-top: 3rem; }
@media (min-width: 600px) { .education-grid { grid-template-columns: 1fr 1fr; } }
.edu-card { background: var(--card-bg); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border); }
.edu-card h3 { font-size: 1rem; margin-bottom: 0.5rem; color: var(--primary-color); }
</style>