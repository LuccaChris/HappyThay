$(document).ready(function () {
    $("#carousel").waterwheelCarousel({
        startingItem: 1,          // Item inicial
        separation: 200,         // Distância entre os itens
        opacityMultiplier: 0.8,  // Redução de opacidade
        flankingItems: 3,        // Quantidade de itens visíveis nas laterais
        autoPlay: 3000,          // Rotação automática (ms)
        speed: 500,              // Velocidade da transição
        sizeMultiplier: 0.9,     // Escala do item central
        edgeFadeEnabled: true    // Desvanece itens nas bordas
    });
});