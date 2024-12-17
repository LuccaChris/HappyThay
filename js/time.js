const targetDate = new Date('2025-02-15T00:00:00');

function updateTimer() {
    const now = new Date();
    const timeRemaining = targetDate - now;
  
    if (timeRemaining > 0) {
      // Calcula dias, horas, minutos e segundos
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      // Atualiza o DOM
      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
      // Quando chegar na data, exibe uma mensagem
      const blackBox = document.querySelector('.black-box');
if (blackBox) {
  blackBox.style.display = 'none'; // Oculta a div
}
    }
    
  }
  
  // Atualiza o cronômetro a cada segundo
  const interval = setInterval(updateTimer, 1000);
  
  // Inicia o cronômetro na carga da página
  updateTimer();