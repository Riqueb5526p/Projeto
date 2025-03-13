document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById('toggleButton');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      // Alterna o ícone do botão entre Lua e Sol
      const icon = toggleButton.querySelector('i');
      if (body.classList.contains('dark-mode')) {
          icon.classList.replace('bi-moon', 'bi-sun'); // Lua para Sol
      } else {
          icon.classList.replace('bi-sun', 'bi-moon'); // Sol para Lua
      }
  });
});