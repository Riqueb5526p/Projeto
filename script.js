document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('toggleButton');
    const increaseFont = document.getElementById('increaseFont');
    const decreaseFont = document.getElementById('decreaseFont');
    const body = document.body;
    const resizableImages = document.querySelectorAll(".resizable");

    let currentFontSize = 16;
    let currentImageSize = 1; 

    // Modo Escuro
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const icon = toggleButton.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.replace('bi-moon', 'bi-sun');
        } else {
            icon.classList.replace('bi-sun', 'bi-moon');
        }
    });

    // Aumentar Fonte e Imagens
    increaseFont.addEventListener('click', () => {
        if (currentFontSize < 22) {  // Limite máximo de 22px
            currentFontSize += 2;
            body.style.fontSize = currentFontSize + "px";

            currentImageSize += 0.1; // Aumenta 10% cada vez
            resizableImages.forEach(img => {
                img.style.transform = `scale(${currentImageSize})`;
            });
        }
    });

    // Diminuir Fonte e Imagens
    decreaseFont.addEventListener('click', () => {
        if (currentFontSize > 12) {  // Limite mínimo de 12px
            currentFontSize -= 2;
            body.style.fontSize = currentFontSize + "px";

            currentImageSize -= 0.1; // Diminui 10% cada vez
            resizableImages.forEach(img => {
                img.style.transform = `scale(${currentImageSize})`;
            });
        }
    });
});
