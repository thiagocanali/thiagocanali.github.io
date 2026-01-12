import { ref, onMounted } from 'vue'

export interface GithubProject {
  id: number
  title: string
  description: string
  techs: string[]
  link: string
  githubUrl: string
  color: string
  stars: number
  updatedAt: string
  pinned?: boolean
}

const CACHE_KEY = 'github-projects-cache'
const CACHE_TTL = 1000 * 60 * 60 * 6 // 6 horas

export function useGithubProjects(username: string) {
  const projects = ref<GithubProject[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  function getColorByLanguage(language: string | null) {
    const colors: Record<string, string> = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      Vue: '#42b883',
      HTML: '#e34c26',
      CSS: '#264de4',
      Python: '#306998',
      default: '#888',
    }
    return language ? colors[language] || colors.default : colors.default
  }

  function loadFromCache(): boolean {
    const cached = localStorage.getItem(CACHE_KEY)
    if (!cached) return false

    try {
      const { data, timestamp } = JSON.parse(cached)
      if (Date.now() - timestamp > CACHE_TTL) return false

      projects.value = data
      return true
    } catch {
      return false
    }
  }

  function saveToCache(data: GithubProject[]) {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    )
  }

  async function fetchFromGitHub() {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
    )

    if (!response.ok) {
      throw new Error('Erro ao buscar repositórios')
    }

    const repos = await response.json()

    const mapped: GithubProject[] = repos
      .filter(
        (repo: any) =>
          repo.has_pages &&
          !repo.fork &&
          repo.name !== `${username}.github.io`
      )
      .map((repo: any) => ({
        id: repo.id,
        title: repo.name,
        description: repo.description || 'Projeto publicado no GitHub Pages',
        techs: repo.language ? [repo.language] : [],
        link: repo.homepage || `https://${username}.github.io/${repo.name}/`,
        githubUrl: repo.html_url,
        color: getColorByLanguage(repo.language),
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at,
        pinned: repo.stargazers_count >= 10,
      }))

    projects.value = mapped
    saveToCache(mapped)
  }

  onMounted(async () => {
    try {
      const loaded = loadFromCache()
      if (!loaded) {
        await fetchFromGitHub()
      }
    } catch (err: any) {
      error.value = err.message
      loadFromCache() // fallback offline
    } finally {
      loading.value = false
    }
  })

  return { projects, loading, error }
}
