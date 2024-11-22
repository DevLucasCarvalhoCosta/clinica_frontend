<template>
  <div class="home">
    <h1>Bem-vindo à Clínica!</h1>
    <div class="links-container">
      <router-link to="/cadastro-paciente" class="link-button">Cadastrar Paciente</router-link>
      <router-link to="/cadastro-medico" class="link-button">Cadastrar Médico</router-link>
      <router-link to="/cadastro-consulta" class="link-button">Cadastrar Consulta</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* Estilização geral da página */
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f7fc; /* Fundo suave */
  color: #333; /* Cor de texto */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #4a90e2; /* Cor para destacar o título */
  margin-bottom: 40px;
}

/* Container dos links */
.links-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; /* Espaçamento entre os links */
}

.link-button {
  display: inline-block;
  padding: 15px 25px;
  margin: 10px 0;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  background-color: #4a90e2; /* Cor de fundo do botão */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  transition: all 0.3s ease; /* Transição suave */
}

/* Efeito de hover nos botões */
.link-button:hover {
  background-color: #357abd; /* Cor mais escura ao passar o mouse */
  transform: translateY(-2px); /* Levanta o botão ao passar o mouse */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Aumenta a sombra no hover */
}

/* Estilo adicional para o layout responsivo */
@media (max-width: 768px) {
  .home {
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  .link-button {
    padding: 12px 22px;
    font-size: 1rem;
  }
}
</style>
