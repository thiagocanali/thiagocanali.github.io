export interface Project {
  title: string
  description: string
  techs: string[]
  link: string
  color?: string
}

export const projects: Project[] = [
    {
    title: 'Naruto Ninja Ranker',
    description: 'Ranking de ninjas inspirado no universo Naruto.',
    techs: ['Vue', 'JavaScript'],
    link: 'https://thiagocanali.github.io/Naruto-Ninja-Ranker/',
    color: '#ef4444'
  },
  {
    title: 'Corrida Infinita',
    description: 'Jogo de corrida infinita desenvolvido para web.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://thiagocanali.github.io/corrida-infinita/',
    color: '#0ea5e9'
  },
  {
    title: 'Mapa NOC 24x7',
    description: 'Mapa interativo para visualização e monitoramento do NOC 24x7.',
    techs: ['Vue', 'TypeScript', 'Leaflet'],
    link: 'https://thiagocanali.github.io/my-noc-map',
    color: '#f59e0b'
  },
  {
    title: 'Escala NOC 24x7',
    description: 'Sistema de escala e organização de turnos.',
    techs: ['Vue', 'Vite', 'JavaScript'],
    link: 'https://thiagocanali.github.io/my-schedu/',
    color: '#6366f1'
  },
  {
    title: 'Teste de Velocidade',
    description: 'Aplicação web para teste de velocidade de internet.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://thiagocanali.github.io/my-speedtest/',
    color: '#10b981'
  },
  {
    title: 'Clean Air BR',
    description: 'Monitoramento da qualidade do ar no Brasil.',
    techs: ['Vue', 'API', 'Charts'],
    link: 'https://thiagocanali.github.io/cleanairbr',
    color: '#3b82f6'
  },
  {
    title: 'Anelise Chagas',
    description: 'Portfólio pessoal institucional.',
    techs: ['Vue', 'CSS'],
    link: 'https://thiagocanali.github.io/anelisechagas',
    color: '#ec4899'
  },
  {
    title: 'Conectados em Cristo',
    description: 'Projeto cristão focado em comunidade e conteúdo.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://thiagocanali.github.io/conectados-em-cristo',
    color: '#f87171'
  },
  {
    title: 'PIBPB',
    description: 'Website institucional da PIBPB.',
    techs: ['Vue', 'Vite'],
    link: 'https://thiagocanali.github.io/pibpb',
    color: '#8b5cf6'
  },
  {
    title: 'Pokemon Tracker',
    description: 'Aplicação para acompanhamento de Pokémons.',
    techs: ['Vue', 'API', 'JavaScript'],
    link: 'https://thiagocanali.github.io/pokemon-tracker/',
    color: '#facc15'
  },

]
