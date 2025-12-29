export interface Project {
  title: string
  description: string
  techs: string[]
  link: string
  color?: string
}

export const projects: Project[] = [
  {
    title: 'Portfolio',
    description: 'Meu site pessoal feito em Vue + Vite.',
    techs: ['Vue', 'Vite', 'TypeScript'],
    link: 'https://thiagocanali.github.io/thiagocanali.github.io/',
    color: '#42b883'
  },
  {
    title: 'Projeto X',
    description: 'Descrição curta do projeto.',
    techs: ['HTML', 'CSS', 'JS'],
    link: '#',
    color: '#6366f1'
  }
]
