document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('toggleButton');
    const increaseFontButton = document.getElementById('increaseFont');
    const decreaseFontButton = document.getElementById('decreaseFont');
    const body = document.body;
    let currentScale = 1; // Escala inicial (1 = 100%)

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Alterna o ícone do botão entre Lua e Sol
        const icon = toggleButton.querySelector('i');
        icon.classList.toggle('bi-moon');
        icon.classList.toggle('bi-sun');
    });

    function adjustSize(scaleFactor) {
        currentScale *= scaleFactor; // Ajusta a escala

        // Ajusta o tamanho do texto
        document.body.style.fontSize = `${currentScale}em`;

        // Ajusta todas as imagens proporcionalmente
        document.querySelectorAll("img").forEach(img => {
            img.style.width = `${img.naturalWidth * currentScale}px`;
            img.style.height = `${img.naturalHeight * currentScale}px`;
        });
    }

    increaseFontButton.addEventListener('click', () => adjustSize(1.1)); // Aumenta 10%
    decreaseFontButton.addEventListener('click', () => adjustSize(0.9)); // Diminui 10%
});
