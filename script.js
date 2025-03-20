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

    function adjustFontSize(scale) {
        currentFontSize *= scale; // Ajusta o tamanho da fonte
        document.body.style.fontSize = `${currentFontSize}em`;

        // Ajustar tamanho das imagens proporcionalmente
        document.querySelectorAll("img").forEach(img => {
            img.style.width = `${img.naturalWidth * currentFontSize}px`;
            img.style.height = `${img.naturalHeight * currentFontSize}px`;
        });
    }

    increaseFontButton.addEventListener('click', () => adjustFontSize(1.1)); // Aumenta 10%
    decreaseFontButton.addEventListener('click', () => adjustFontSize(0.9)); // Diminui 10%
});
