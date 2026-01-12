import { ref, watch, onMounted } from 'vue'

export function useTheme() {
  const theme = ref<'light' | 'dark'>('light')

  // Carrega do localStorage ou define padrão
  onMounted(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (saved) theme.value = saved
    applyTheme(theme.value)
  })

  // Aplica tema e salva
  function applyTheme(value: 'light' | 'dark') {
    document.documentElement.setAttribute('data-theme', value)
    localStorage.setItem('theme', value)
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    applyTheme(theme.value)
  }

  return { theme, toggleTheme }
}
