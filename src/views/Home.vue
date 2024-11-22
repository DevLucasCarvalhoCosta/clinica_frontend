<template>
  <div class="home">
    <h1>Bem-vindo à Clínica!</h1>
    <div class="links-container">
      <router-link to="/cadastro-paciente" class="link-button">Cadastrar Paciente</router-link>
      <router-link to="/cadastro-medico" class="link-button">Cadastrar Médico</router-link>
      <router-link to="/cadastro-consulta" class="link-button">Cadastrar Consulta</router-link>
      <router-link to="/listar-consulta" class="link-button">Listar Todas Consultas</router-link>
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
  justify-content: flex-start; /* Garante que o conteúdo vá para o topo da tela */
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #f4f7fc; /* Fundo suave */
  color: #333; /* Cor de texto */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center; /* Centraliza o texto horizontalmente */
}

/* Título */
h1 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #4a90e2; /* Cor para destacar o título */
  margin-top: 20px; /* Espaçamento no topo */
  margin-bottom: 30px; /* Espaçamento abaixo do título */
}

/* Container dos links */
.links-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Aumentado o espaçamento entre os links */
  width: 100%;
}

/* Botões de links */
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
  width: 100%; /* Faz os botões ocuparem toda a largura disponível */
  max-width: 350px; /* Limita o tamanho máximo dos botões */
  text-align: center; /* Garante que o texto no botão fique centralizado */
}

/* Efeito de hover nos botões */
.link-button:hover {
  background-color: #357abd; /* Cor mais escura ao passar o mouse */
  transform: translateY(-2px); /* Levanta o botão ao passar o mouse */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Aumenta a sombra no hover */
}

/* Estilo adicional para o layout responsivo */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem; /* Menor tamanho de fonte em telas pequenas */
  }

  .link-button {
    padding: 12px 22px;
    font-size: 1rem; /* Ajuste no tamanho do texto do botão */
  }
}
</style>
