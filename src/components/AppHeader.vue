<template>
    <header class="header">
        <div class="header-inner">
            <h1 class="logo">
                <RouterLink to="/">Thiago Canali</RouterLink>
            </h1>

            <nav class="nav">
                <RouterLink to="/" active-class="active">Projetos</RouterLink>
                <RouterLink to="/about" active-class="active">Sobre</RouterLink>
                <RouterLink to="/contact" active-class="active">Contato</RouterLink>

                <a href="https://github.com/thiagocanali" target="_blank" rel="noopener">
                    GitHub
                </a>
            </nav>

        </div>
    </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header {
    margin-bottom: 2.5rem;
}

.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo a {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text);
}

.nav {
    display: flex;
    gap: 1.2rem;
}

.nav a {
    font-size: 0.9rem;
    color: var(--muted);
    transition: color 0.2s;
}

.nav a:hover,
.nav a.active {
    color: var(--primary);
}

@media (max-width: 640px) {
    .nav {
        gap: 0.8rem;
        font-size: 0.85rem;
    }
}
</style>
