// src/data/projects.ts

export interface Project {
  title: string
  description: string
  techs: string[]
  link: string
  color?: string
}

export const projects: Project[] = [
  {
    title: 'Mapa NOC 24x7',
    description: 'Mapa interativo do NOC 24x7.',
    techs: ['Vue', 'TypeScript', 'Leaflet'],
    link: 'https://thiagocanali.github.io/my-noc-map',
    color: '#f59e0b'
  },
  {
    title: 'Escala NOC 24x7',
    description: 'Sistema de escala de turnos.',
    techs: ['Vue', 'Vite', 'JavaScript'],
    link: 'https://thiagocanali.github.io/my-schedu/',
    color: '#6366f1'
  },
  {
    title: 'Teste de Velocidade',
    description: 'Teste de internet online.',
    techs: ['HTML', 'CSS', 'JS'],
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
    description: 'Portfólio pessoal de Anelise Chagas.',
    techs: ['Vue', 'CSS'],
    link: 'https://thiagocanali.github.io/anelisechagas',
    color: '#ec4899'
  },
  {
    title: 'Conectados em Cristo',
    description: 'Projeto religioso online.',
    techs: ['HTML', 'CSS', 'JS'],
    link: 'https://thiagocanali.github.io/conectados-em-cristo',
    color: '#f87171'
  },
  {
    title: 'PIBPB',
    description: 'Website da PIBPB.',
    techs: ['Vue', 'Vite'],
    link: 'https://thiagocanali.github.io/pibpb',
    color: '#8b5cf6'
  },
  {
    title: 'Pokemon Tracker',
    description: 'Rastreador de Pokémons.',
    techs: ['Vue', 'API', 'JS'],
    link: 'https://thiagocanali.github.io/pokemon-tracker/',
    color: '#facc15'
  }
]
