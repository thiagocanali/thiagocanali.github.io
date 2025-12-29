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
    description: 'Visualização do mapa da operação NOC 24x7.',
    techs: ['Vue', 'Leaflet', 'TypeScript'],
    link: 'https://thiagocanali.github.io/my-noc-map',
    color: '#f59e0b'
  },
  {
    title: 'Escala NOC 24x7',
    description: 'Gerenciamento da escala de operadores NOC 24x7.',
    techs: ['Vue', 'Vite', 'CSS'],
    link: 'https://thiagocanali.github.io/my-schedu/',
    color: '#10b981'
  },
  {
    title: 'Teste de Velocidade',
    description: 'Ferramenta para testar a velocidade de conexão.',
    techs: ['HTML', 'JS', 'CSS'],
    link: 'https://thiagocanali.github.io/my-speedtest/',
    color: '#3b82f6'
  },
  {
    title: 'Clean Air BR',
    description: 'Monitoramento de qualidade do ar no Brasil.',
    techs: ['Vue', 'API', 'Chart.js'],
    link: 'https://thiagocanali.github.io/cleanairbr',
    color: '#6366f1'
  },
  {
    title: 'Anelise Chagas',
    description: 'Portfólio pessoal da Anelise Chagas.',
    techs: ['HTML', 'CSS', 'JS'],
    link: 'https://thiagocanali.github.io/anelisechagas',
    color: '#ec4899'
  },
  {
    title: 'Conectados em Cristo',
    description: 'Projeto comunitário da igreja.',
    techs: ['Vue', 'Firebase', 'CSS'],
    link: 'https://thiagocanali.github.io/conectados-em-cristo',
    color: '#f87171'
  },
  {
    title: 'PIBPB',
    description: 'Site institucional da PIBPB.',
    techs: ['Vue', 'CSS', 'HTML'],
    link: 'https://thiagocanali.github.io/pibpb',
    color: '#8b5cf6'
  },
  {
    title: 'Pokemon Tracker',
    description: 'Rastreador de Pokemons em tempo real.',
    techs: ['Vue', 'API', 'JS'],
    link: 'https://thiagocanali.github.io/pokemon-tracker/',
    color: '#facc15'
  }
]
