document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggleButton');
  
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
      } else {
        toggleButton.textContent = 'Modo Escuro';
      }
    });
  });
  