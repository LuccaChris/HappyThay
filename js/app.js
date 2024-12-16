document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 3; // Começa no índice 1
    const items = document.querySelectorAll('.item');
    const totalItems = items.length;
    const carousel = document.getElementById('carousel');

    // Atualizar a posição do carrossel
    function updateCarouselPosition() {
        // Define a propriedade CSS --position
        carousel.style.setProperty('--position', currentIndex);
    }

    // Mover o carrossel
    function moveCarousel(direction) {
        // Atualizar o índice atual
        currentIndex = (currentIndex + direction + totalItems - 1) % totalItems + 1;
        updateCarouselPosition();
    }

    // Associa eventos aos botões de navegação
    document.querySelector('.nav-button.left').addEventListener('click', () => moveCarousel(-1));
    document.querySelector('.nav-button.right').addEventListener('click', () => moveCarousel(1));

    // Inicializa a posição inicial
    updateCarouselPosition();
});
/* garden*/
document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // Posição atual do scroll
    const windowHeight = window.innerHeight; // Altura visível da janela
    const fullHeight = document.documentElement.scrollHeight; // Altura total do documento

    // Verifica se chegou ao final da página
    if (scrollTop + windowHeight >= fullHeight - 10) {
        const garden = document.querySelector(".garden");
        garden.classList.add("active");
        garden.classList.remove("hidden");
    }
});