// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Já importa o router corretamente
import store from './store'; // Se você estiver usando Vuex ou outro store
import axios from 'axios';
import './assets/tailwind.css';

// Configurando a base do Axios
axios.defaults.baseURL = "http://localhost:8080/";

// Criando a aplicação Vue
const app = createApp(App);

// Usando o Router, Store e montando a aplicação
app.use(router); // usa o Vue Router
app.use(store); // usa o Vuex (se estiver utilizando)
app.mount('#app'); // Monta a aplicação no elemento #app
