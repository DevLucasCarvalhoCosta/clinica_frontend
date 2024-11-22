<template>
  <div class="form-container">
    <h2>Cadastrar Médico</h2>
    <form @submit.prevent="cadastrarMedico">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input v-model="medico.nome" type="text" id="nome" required />
      </div>
      <div class="form-group">
        <label for="especialidade">Especialidade:</label>
        <input v-model="medico.especialidade" type="text" id="especialidade" required />
      </div>
      <button type="submit" class="submit-button">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      medico: {
        nome: "",
        especialidade: "",
      },
    };
  },
  methods: {
    async cadastrarMedico() {
      try {
        const response = await axios.post("/api/medicos", this.medico);
        alert("Médico cadastrado com sucesso!");
        this.$router.push("/"); // Redireciona para a tela inicial
      } catch (error) {
        console.error(error);
        alert("Erro ao cadastrar médico.");
      }
    },
  },
};
</script>

<style scoped>
/* Estilos do formulário */
.form-container {
  max-width: 500px;
  margin: auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 12px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f7fc; /* Cor de fundo suave, igual à Home */
}

h2 {
  font-size: 2rem;
  color: #4a90e2; /* Cor do título igual à da Home */
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  font-weight: 500;
  font-size: 1rem;
  color: #333;
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px; /* Bordas arredondadas */
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #4a90e2; /* Cor do contorno ao focar no input */
}

.submit-button {
  padding: 15px 30px;
  background-color: #4a90e2; /* Cor do botão */
  color: #fff;
  border: none;
  border-radius: 8px; /* Bordas arredondadas */
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background-color: #357abd; /* Cor de hover do botão */
  transform: translateY(-2px); /* Efeito de elevação */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Sombra mais forte no hover */
}

/* Responsividade */
@media (max-width: 768px) {
  .form-container {
    padding: 20px;
  }

  h2 {
    font-size: 1.8rem;
  }

  .submit-button {
    padding: 12px 25px;
    font-size: 1rem;
  }
}
</style>
