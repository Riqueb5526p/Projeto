document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('toggleButton');
    const increaseFontButton = document.getElementById('increaseFont');
    const decreaseFontButton = document.getElementById('decreaseFont');
    const body = document.body;
    let currentFontSize = 1; // Tamanho base da fonte (1 = 100%)

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