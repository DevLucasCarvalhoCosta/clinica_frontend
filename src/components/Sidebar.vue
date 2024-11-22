<template>
    <aside class="sidebar">
      <div class="sidebar-header">
        <h2>Clínica XYZ</h2>
      </div>
      <nav class="sidebar-nav">
        <ul>
          <li :class="{ active: isActive('/dashboard') }">
            <router-link to="/dashboard" class="sidebar-link">Dashboard</router-link>
          </li>
          <li :class="{ active: isActive('/appointments') }">
            <router-link to="/appointments" class="sidebar-link">Consultas</router-link>
          </li>
          <li :class="{ active: isActive('/patients') }">
            <router-link to="/patients" class="sidebar-link">Pacientes</router-link>
          </li>
          <li :class="{ active: isActive('/doctors') }">
            <router-link to="/doctors" class="sidebar-link">Médicos</router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    methods: {
      isActive(route) {
        return this.$route.path === route;
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    background-color: #2c3e50;
    color: white;
    width: 250px;
    min-height: 100vh;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .sidebar-header h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .sidebar-nav ul {
    list-style: none;
    padding-left: 0;
  }
  
  .sidebar-link {
    color: white;
    text-decoration: none;
    font-weight: bold;
    display: block;
    padding: 12px 20px;
    margin: 10px 0;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .sidebar-link:hover {
    background-color: #1abc9c;
  }
  
  .sidebar-nav li.active .sidebar-link {
    background-color: #16a085;
  }
  </style>
  