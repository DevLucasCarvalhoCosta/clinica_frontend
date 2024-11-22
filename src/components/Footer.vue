<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} Clínica XYZ - Todos os direitos reservados.</p>
        <div class="footer-links">
          <a href="/about" class="footer-link">Sobre</a>
          <a href="/privacy" class="footer-link">Política de Privacidade</a>
          <a href="/contact" class="footer-link">Contato</a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #2c3e50;
    color: white;
    padding: 20px 0;
    text-align: center;
    position: relative;
    width: 100%;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .footer-links {
    display: flex;
    gap: 15px;
  }
  
  .footer-link {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .footer-link:hover {
    color: #1abc9c;
  }
  </style>
  