<!-- src/views/MedicoCadastro.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <h2>Cadastro de Médico</h2>
    <InputField
      label="Nome"
      name="nome"
      v-model="nome"
      required
    />
    <InputField
      label="Especialidade"
      name="especialidade"
      v-model="especialidade"
      required
    />
    <button type="submit">Cadastrar</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import api from '../services/api';
import InputField from '../components/InputField.vue';

export default {
  components: {
    InputField,
  },
  setup() {
    const nome = ref('');
    const especialidade = ref('');

    const handleSubmit = async () => {
      const medico = { nome: nome.value, especialidade: especialidade.value };
      try {
        await api.post('/medicos', medico);
        alert('Médico cadastrado com sucesso!');
        nome.value = '';
        especialidade.value = '';
      } catch (error) {
        console.error('Erro ao cadastrar médico', error);
        alert('Erro ao cadastrar médico!');
      }
    };

    return {
      nome,
      especialidade,
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

button {
  margin-top: 1rem;
}
</style>
