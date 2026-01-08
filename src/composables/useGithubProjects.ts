import { ref, onMounted } from 'vue'

export interface GithubProject {
  id: number
  name: string
  description: string
  githubUrl: string
  projectUrl: string
  language: string
  stars: number
  updatedAt: string
}

export function useGithubProjects(username: string) {
  const projects = ref<GithubProject[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
      )

      if (!response.ok) {
        throw new Error('Erro ao buscar repositórios')
      }

      const data = await response.json()

      projects.value = data
        .filter((repo: any) => repo.has_pages && !repo.fork)
        .map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          githubUrl: repo.html_url,
          projectUrl:
            repo.homepage ||
            `https://${username}.github.io/${repo.name}/`,
          language: repo.language,
          stars: repo.stargazers_count,
          updatedAt: repo.updated_at,
        }))
        .sort(
          (a: any, b: any) =>
            new Date(b.updatedAt).getTime() -
            new Date(a.updatedAt).getTime()
        )
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchProjects)

  return {
    projects,
    loading,
    error,
  }
}
