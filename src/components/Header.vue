<template>
    <header class="header">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Logo da Clínica" />
        </router-link>
      </div>
      <nav class="navbar">
        <ul>
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/about" class="nav-link">Sobre</router-link></li>
          <li><router-link to="/services" class="nav-link">Serviços</router-link></li>
          <li><router-link to="/contact" class="nav-link">Contato</router-link></li>
          <li v-if="!isAuthenticated">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li v-if="isAuthenticated">
            <router-link to="/profile" class="nav-link">Perfil</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isAuthenticated: false, // Esta variável pode ser dinâmica dependendo do estado do usuário
      };
    },
    mounted() {
      // Verifique se o usuário está autenticado e atualize a variável isAuthenticated
      this.isAuthenticated = localStorage.getItem('auth_token') !== null;
    },
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #34495e;
    color: white;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo img {
    height: 40px;
  }
  
  .navbar ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 10px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .nav-link:hover {
    background-color: #1abc9c;
  }
  </style>
  