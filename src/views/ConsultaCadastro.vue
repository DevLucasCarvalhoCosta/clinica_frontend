<template>
  <div class="form-container">
    <h2>Cadastrar Consulta</h2>
    <form @submit.prevent="cadastrarConsulta">
      <div class="form-group">
        <label for="paciente">Paciente:</label>
        <select v-model="consulta.pacienteId" id="paciente" required>
          <option v-for="paciente in pacientes" :key="paciente.id" :value="paciente.id">
            {{ paciente.nome }}
          </option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="medico">Médico:</label>
        <select v-model="consulta.medicoId" id="medico" required>
          <option v-for="medico in medicos" :key="medico.id" :value="medico.id">
            {{ medico.nome }}
          </option>
        </select>
      </div>

      <!-- Mostrar a especialidade do médico selecionado -->
      <div v-if="medicoSelecionado" class="form-group">
        <label>Especialidade:</label>
        <p>{{ medicoSelecionado.especialidade }}</p>
      </div>

      <div class="form-group">
        <label for="dataHora">Data e Hora:</label>
        <input v-model="consulta.dataHora" type="datetime-local" id="dataHora" required />
      </div>

      <button type="submit" class="submit-button">Cadastrar Consulta</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      consulta: {
        pacienteId: null,
        medicoId: null,
        dataHora: "",
      },
      pacientes: [],
      medicos: [],
    };
  },
  computed: {
    medicoSelecionado() {
      return this.medicos.find(medico => medico.id === this.consulta.medicoId);
    }
  },
  async created() {
    try {
      const pacientesResponse = await axios.get("/api/pacientes");
      const medicosResponse = await axios.get("/api/medicos");
      this.pacientes = pacientesResponse.data;
      this.medicos = medicosResponse.data;
    } catch (error) {
      console.error(error);
      alert("Erro ao carregar dados.");
    }
  },
  methods: {
    async cadastrarConsulta() {
      try {
        // Garantir que a data esteja no formato correto
        const consultaFormatada = {
          dataHora: new Date(this.consulta.dataHora).toISOString(),
          paciente: { id: this.consulta.pacienteId }, // A paciente deve ser um objeto com o ID
          medicos: [{ id: this.consulta.medicoId }] // Transformar o ID do médico em um array de objetos
        };

        const response = await axios.post("/api/consultas", consultaFormatada);
        alert("Consulta cadastrada com sucesso!");
        this.$router.push("/"); // Redireciona para a tela inicial
      } catch (error) {
        console.error(error);
        alert("Erro ao cadastrar consulta.");
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
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f7fc;
}

h2 {
  font-size: 2rem;
  color: #4a90e2;
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

select, input {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

select:focus, input:focus {
  border-color: #4a90e2;
}

.submit-button {
  padding: 15px 30px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background-color: #357abd;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
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
