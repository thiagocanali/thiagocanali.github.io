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
    description: 'Meu site pessoal com projetos e experiências',
    techs: ['Vue', 'TypeScript', 'Tailwind'],
    link: 'https://meusite.com',
    color: '#42b883'
  },
  {
    title: 'Blog',
    description: 'Blog sobre tecnologia e desenvolvimento',
    techs: ['Nuxt', 'Markdown'],
    link: 'https://blog.meusite.com',
    color: '#ff7f50'
  }
]
