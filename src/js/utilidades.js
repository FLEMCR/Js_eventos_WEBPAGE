document.addEventListener('DOMContentLoaded', function () {
  let contador = document.getElementById('contador');
  const tarjetas = document.querySelectorAll('.lecr_tarjeta');

  contador.textContent = tarjetas.length;
});
