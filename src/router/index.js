// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CadastroPaciente from '../views/PacienteCadastro.vue';
import CadastroMedico from '../views/MedicoCadastro.vue';
import CadastroConsulta from '../views/ConsultaCadastro.vue';
import ListarConsultas from '@/views/ListarConsultas.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/cadastro-paciente', component: CadastroPaciente },
  { path: '/cadastro-medico', component: CadastroMedico },
  { path: '/cadastro-consulta', component: CadastroConsulta },
  { path: '/listar-consulta', component: ListarConsultas },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
