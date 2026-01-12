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
}

const CACHE_KEY = 'github-projects-cache'
const CACHE_TTL = 1000 * 60 * 60 * 6 // 6 horas

export function useGithubProjects(username: string) {
  const projects = ref<GithubProject[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  function loadFromCache() {
    const cached = localStorage.getItem(CACHE_KEY)
    if (!cached) return false

    const { data, timestamp } = JSON.parse(cached)
    const isExpired = Date.now() - timestamp > CACHE_TTL

    if (isExpired) return false

    projects.value = data
    return true
  }

  function saveToCache(data: GithubProject[]) {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data, timestamp: Date.now() })
    )
  }

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

  async function fetchFromGitHub() {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
    )

    if (!response.ok) throw new Error('Erro ao buscar repositórios')

    const repos = await response.json()

    const filtered: GithubProject[] = repos
      .filter(
        (repo: any) =>
          repo.has_pages && !repo.fork && repo.name !== `${username}.github.io`
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
      }))
      .sort(
        (a: GithubProject, b: GithubProject) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      )

    projects.value = filtered
    saveToCache(filtered)
  }

  async function loadProjects() {
    try {
      const loadedFromCache = loadFromCache()
      if (!loadedFromCache) await fetchFromGitHub()
    } catch (err: any) {
      error.value = err.message
      loadFromCache() // fallback offline
    } finally {
      loading.value = false
    }
  }

  onMounted(loadProjects)

  return { projects, loading, error }
}
