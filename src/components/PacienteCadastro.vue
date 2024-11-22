<!-- src/views/PacienteCadastro.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <h2>Cadastro de Paciente</h2>
    
    <InputField
      label="Nome"
      name="nome"
      v-model="nome"
      required
      :error="nomeError"
    />
    <InputField
      label="CPF"
      name="cpf"
      v-model="cpf"
      required
      :error="cpfError"
    />
    <InputField
      label="Telefone"
      name="telefone"
      v-model="telefone"
      required
      :error="telefoneError"
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
    const cpf = ref('');
    const telefone = ref('');
    
    // Variáveis para controle de erro
    const nomeError = ref('');
    const cpfError = ref('');
    const telefoneError = ref('');

    // Função para validar os campos antes de enviar ao backend
    const validateForm = () => {
      let isValid = true;
      
      // Resetando erros
      nomeError.value = '';
      cpfError.value = '';
      telefoneError.value = '';

      // Validação do nome
      if (!nome.value) {
        nomeError.value = 'O nome é obrigatório.';
        isValid = false;
      }

      // Validação do CPF (11 dígitos)
      const cpfPattern = /^\d{11}$/;
      if (!cpf.value || !cpfPattern.test(cpf.value)) {
        cpfError.value = 'O CPF deve conter 11 dígitos.';
        isValid = false;
      }

      // Validação do telefone
      const telefonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;
      if (!telefone.value || !telefonePattern.test(telefone.value)) {
        telefoneError.value = 'O telefone deve seguir o formato (XX) XXXXX-XXXX.';
        isValid = false;
      }

      return isValid;
    };

    // Função para enviar os dados para a API
    const handleSubmit = async () => {
      if (!validateForm()) {
        return; // Não envia os dados se o formulário não for válido
      }

      const paciente = { nome: nome.value, cpf: cpf.value, telefone: telefone.value };

      try {
        // Envia os dados para o backend
        await api.post('/pacientes', paciente);
        alert('Paciente cadastrado com sucesso!');
        
        // Limpa os campos após o cadastro
        nome.value = '';
        cpf.value = '';
        telefone.value = '';
      } catch (error) {
        console.error('Erro ao cadastrar paciente', error);

        // Se a resposta do erro for uma violação de validação
        if (error.response && error.response.data) {
          const errorMessages = error.response.data.errors || [];
          
          // Atualiza os erros conforme a resposta do backend
          errorMessages.forEach((errorMessage) => {
            if (errorMessage.includes('nome')) nomeError.value = errorMessage;
            if (errorMessage.includes('cpf')) cpfError.value = errorMessage;
            if (errorMessage.includes('telefone')) telefoneError.value = errorMessage;
          });
        }

        alert('Erro ao cadastrar paciente!');
      }
    };

    return {
      nome,
      cpf,
      telefone,
      nomeError,
      cpfError,
      telefoneError,
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

input:invalid {
  border-color: red;
}

span {
  color: red;
  font-size: 12px;
}
</style>
