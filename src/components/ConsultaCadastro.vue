<template>
  <form @submit.prevent="handleSubmit">
    <h2>Cadastro de Consulta</h2>

    <!-- Seleção do Paciente -->
    <label for="paciente">Paciente</label>
    <select v-model="pacienteId" required>
      <option value="">Selecione um paciente</option>
      <option v-for="paciente in pacientes" :key="paciente.id" :value="paciente.id">
        {{ paciente.nome }}
      </option>
    </select>

    <!-- Seleção do Médico -->
    <label for="medico">Médico</label>
    <select v-model="medicoId" required>
      <option value="">Selecione um médico</option>
      <option v-for="medico in medicos" :key="medico.id" :value="medico.id">
        {{ medico.nome }} - {{ medico.especialidade }}
      </option>
    </select>

    <!-- Campo de Data e Hora -->
    <InputField
      label="Data e Hora"
      type="datetime-local"
      name="dataHora"
      v-model="dataHora"
      required
    />

    <!-- Botão de Cadastro -->
    <button type="submit">Cadastrar Consulta</button>
  </form>
</template>

<script>
import { ref, onMounted } from 'vue';
import api from '../services/api';
import InputField from '../components/InputField.vue';

export default {
  components: {
    InputField,
  },
  setup() {
    const pacienteId = ref('');
    const medicoId = ref('');
    const dataHora = ref('');
    const pacientes = ref([]);
    const medicos = ref([]);

    // Buscar lista de pacientes
    const fetchPacientes = async () => {
      try {
        const response = await api.get('/pacientes');
        pacientes.value = response.data;
      } catch (error) {
        console.error('Erro ao carregar pacientes', error);
        alert('Erro ao carregar a lista de pacientes!');
      }
    };

    // Buscar lista de médicos
    const fetchMedicos = async () => {
      try {
        const response = await api.get('/medicos');
        medicos.value = response.data;
      } catch (error) {
        console.error('Erro ao carregar médicos', error);
        alert('Erro ao carregar a lista de médicos!');
      }
    };

    // Submeter formulário
    const handleSubmit = async () => {
      // Formato do objeto enviado ao backend
      const consulta = {
        dataHora: dataHora.value,
        id: pacienteId.value,
        id: medicoId.value,
      };

      try {
        // Enviar consulta para o backend
        await api.post('/consultas', consulta);
        alert('Consulta cadastrada com sucesso!');

        // Limpar formulário após sucesso
        pacienteId.value = '';
        medicoId.value = '';
        dataHora.value = '';
      } catch (error) {
        console.error('Erro ao cadastrar consulta', error);
        alert('Erro ao cadastrar consulta!');
      }
    };

    onMounted(() => {
      fetchPacientes();
      fetchMedicos();
    });

    return {
      pacienteId,
      medicoId,
      dataHora,
      pacientes,
      medicos,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
  margin-top: 1rem;
  font-weight: bold;
}

select,
input,
button {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 1rem;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
