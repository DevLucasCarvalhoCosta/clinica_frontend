<template>
  <div class="form-container">
    <h2>Listar Consultas</h2>
    <table class="consulta-table">
      <thead>
        <tr>
          <th>Paciente</th>
          <th>Médicos</th>
          <th>Data e Hora</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="consulta in consultas" :key="consulta.id">
          <td>{{ consulta.paciente?.nome || "Desconhecido" }}</td>
          <td>
            <ul>
              <li v-for="medico in consulta.medicos" :key="medico.id">
                {{ medico.nome }} ({{ medico.especialidade }})
              </li>
            </ul>
          </td>
          <td>{{ formatDataHora(consulta.dataHora) }}</td>
          <td>
            <button @click="editarConsulta(consulta.id)" class="edit-button">Editar</button>
            <button @click="deletarConsulta(consulta.id)" class="delete-button">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      consultas: [], // Dados de consultas
    };
  },
  async created() {
    try {
      // Carrega consultas com dados relacionados já embutidos
      const consultasResponse = await axios.get("/api/consultas");
      this.consultas = consultasResponse.data;
    } catch (error) {
      console.error(error);
      alert("Erro ao carregar dados.");
    }
  },
  methods: {
    // Função para formatar a data
    formatDataHora(dataHora) {
      const date = new Date(dataHora);
      return date.toLocaleString(); // Formata a data/hora para o formato local
    },
    // Função para editar consulta
    async editarConsulta(id) {
      try {
        // Redireciona para a tela de edição
        this.$router.push(`/editar-consulta/${id}`);
      } catch (error) {
        console.error(error);
        alert("Erro ao redirecionar para a edição.");
      }
    },
    // Função para deletar consulta
    async deletarConsulta(id) {
      if (confirm("Tem certeza que deseja excluir essa consulta?")) {
        try {
          await axios.delete(`/api/consultas/${id}`);
          this.consultas = this.consultas.filter(consulta => consulta.id !== id);
          alert("Consulta excluída com sucesso!");
        } catch (error) {
          console.error(error);
          alert("Erro ao excluir consulta.");
        }
      }
    },
  },
};
</script>

<style scoped>
/* Estilos da tabela */
.form-container {
  max-width: 900px;
  margin: auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f7fc;
}

h2 {
  font-size: 2rem;
  color: #4a90e2;
  margin-bottom: 20px;
}

.consulta-table {
  width: 100%;
  border-collapse: collapse;
}

.consulta-table th,
.consulta-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.consulta-table th {
  background-color: #4a90e2;
  color: #fff;
}

button {
  padding: 8px 12px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;
}

.edit-button {
  background-color: #f8b400;
  color: white;
}

.edit-button:hover {
  background-color: #e68a00;
}

.delete-button {
  background-color: #d9534f;
  color: white;
}

.delete-button:hover {
  background-color: #c9302c;
}

/* Responsividade */
@media (max-width: 768px) {
  .form-container {
    padding: 20px;
  }

  .consulta-table th, .consulta-table td {
    font-size: 0.9rem;
    padding: 10px;
  }

  button {
    padding: 6px 10px;
  }
}
</style>
