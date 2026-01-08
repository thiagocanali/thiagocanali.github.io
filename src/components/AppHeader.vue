<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Dashboard</router-link></li>
        <li><router-link to="/about">Sobre</router-link></li>
        <li><router-link to="/experience">Experiência</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 1rem;
  background-color: #42b883;
  color: white;
}
nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
nav a {
  color: white;
  text-decoration: none;
}
nav a.router-link-active {
  text-decoration: underline;
  font-weight: bold;
}
</style>
