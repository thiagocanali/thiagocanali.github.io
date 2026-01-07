<template>
  <section class="contact container">
    <header class="contact-header">
      <h1>Contato</h1>
      <p class="subtitle">
        Vamos conversar? Fique à vontade para entrar em contato comigo.
      </p>
    </header>

    <div class="contact-grid">
      <!-- Texto -->
      <div class="contact-info">
        <p>
          Estou aberto a oportunidades, freelas, colaborações ou apenas uma boa
          conversa sobre tecnologia.
        </p>

        <ul class="contact-links">
          <li>
            💼
            <a
              href="https://www.linkedin.com/in/thiagocanali/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            🧑‍💻
            <a
              href="https://github.com/thiagocanali"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            ✉️
            <a href="mailto:thiagocanali@gmail.com">
              thiagocanali@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <!-- Formulário -->
      <form
        class="contact-form"
        action="mailto:thiagocanali@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          required
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Sua mensagem"
          required
        ></textarea>

        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.contact {
  padding: 2.5rem 1rem;
}

.contact-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.subtitle {
  color: var(--muted);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

/* Info */
.contact-info p {
  font-size: 0.95rem;
  line-height: 1.7;
}

.contact-links {
  list-style: none;
  padding: 0;
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.contact-links a {
  font-weight: 600;
}

/* Form */
.contact-form {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.65rem 0.75rem;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  font-family: inherit;
  font-size: 0.9rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.contact-form button {
  margin-top: 0.6rem;
  background: var(--primary);
  color: #000;
  font-weight: 600;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
