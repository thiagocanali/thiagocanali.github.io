import { ref, watch } from 'vue'

export function useDarkMode() {
  const darkMode = ref(localStorage.getItem('darkMode') === 'true')

  watch(darkMode, (value) => {
    if (value) document.body.classList.add('dark')
    else document.body.classList.remove('dark')
    localStorage.setItem('darkMode', value.toString())
  }, { immediate: true })

  function toggle() {
    darkMode.value = !darkMode.value
  }

  return { darkMode, toggle }
}
